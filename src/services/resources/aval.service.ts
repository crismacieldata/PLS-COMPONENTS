import api from '../api_v4.service';
import { AvaliacaoDesktopProps } from '../../pages/Avaliacoes/Avaliacao/Desktop/AvaliacaoDesktop';

const AvalService = {
	getAvals: (): Promise<AvaliacaoDesktopProps> => {
		return api()
			.get('/avaliacoes')
			.then((res: any) => {
				return res.data;
			})
			.catch((e: any) => {
				if (e.name === 'AxiosError') {
					throw {
						code: e.response.status,
						message: e.response.data.message
					};
				}

				throw e;
			});
	}
};

export default AvalService;
