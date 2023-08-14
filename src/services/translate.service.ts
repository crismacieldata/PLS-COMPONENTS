import api from './api_v4.service';
import queryString from 'query-string';

const parsed: any = queryString.parse(document.location.search);
const language: any = parsed.l ?? localStorage.getItem('language');
const idiomaComunicacao: any = language ?? 1;

interface TraducaoDto {
	key: string;
	category: string;

	translates: {
		pt: string;
		en: string;
		es: string;
	};
}

export class TranslateService {
	private static traducoes: TraducaoDto[] = [];

	static translate(categoria: string, text: string): string {
		return TranslateService.getTranslates(categoria, text);
	}

	static async carregarTraducoes(callback: () => void) {
		const traducoesStr = sessionStorage.getItem('traducoes');

		if (!traducoesStr) {
			api()
				.get('/traducao')
				.then(res => {
					sessionStorage.setItem('traducoes', JSON.stringify(res.data));
					callback();
				});
		} else {
			callback();
		}
	}

	private static getTranslates(categoria: string, text: string): string {
		const traducoesStr = sessionStorage.getItem('traducoes');

		if (traducoesStr) {
			TranslateService.traducoes = JSON.parse(traducoesStr);
			const translatedText: any = TranslateService.traducoes.find(f => f.category === categoria && f.key === text);

			if (translatedText) {
				switch (+idiomaComunicacao) {
					case 1: // PT
						return translatedText.translates.pt !== '' ? translatedText.translates.pt : text;
					case 2: // EN
						return translatedText.translates.en ? translatedText.translates.en : translatedText.translates.pt;
					case 3: // ES
						return translatedText.translates.es ? translatedText.translates.es : translatedText.translates.pt;
				}
			}
		}

		return text;
	}
}
