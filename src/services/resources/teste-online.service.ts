import api from '../api_v4.service';

const TesteOnlineService = {
	loadTeste: (idAtiv: number): Promise<any> => {
		return api()
			.get(`/teste-online/${idAtiv}/display`)
			.then(res => res.data);
	},
	loadMap: (idAtiv: number): Promise<any> => {
		return api()
			.get(`/teste-online/${idAtiv}/map`)
			.then(res => res.data);
	},
	loadQuestao: (idAtiv: number, ultimaQuest: number): Promise<any> => {
		return api()
			.get(`/teste-online/${idAtiv}/${ultimaQuest}`)
			.then(res => res.data);
	},
	updateTime: (idAtiv: number, remainingDuration: number | undefined) => {
		return api().put(`/teste-online/${idAtiv}/tempo`, {
			tempo: remainingDuration
		});
	},
	start: (idAtiv: number) => {
		return api()
			.put(`/teste-online/${idAtiv}/start`)
			.then(res => res.data);
	},
	save: (idAtiv: number, data: any) => {
		return api().post(`/teste-online/${idAtiv}/save`, data);
	},
	finalizar: (idAtiv: number) => {
		return api().put(`/teste-online/${idAtiv}/finalizar`);
	},
	finalizarTesteEscrita: (idAtiv: number, escrita: string, questId: number) => {
		return api().put(`/teste-online/${idAtiv}/finalizar-escrita`, {
			escrita,
			questId
		});
	}
};

export default TesteOnlineService;
