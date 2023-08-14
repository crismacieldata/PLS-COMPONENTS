import api from '../api.service';
import apiv4 from '../api_v4.service';

const AtivService = {
	getAtivs: (): Promise<any> => {
		return apiv4()
			.get('/atividades')
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
	},
	getAutoanalise: (idAval: number): Promise<any> => {
		return api()
			.get(`/autoanalise/${idAval}`)
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
	},
	getParciais: (idAtiv: number): Promise<any> => {
		return api()
			.get(`/parciais/${idAtiv}`)
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

export default AtivService;
