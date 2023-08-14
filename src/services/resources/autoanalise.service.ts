import api from '../api_v4.service';

const AutoanaliseService = {
	getAutoanalise: (idAtiv: number, idioma: number): Promise<any> => {
		return api()
			.get(`/autoanalise?idAtiv=${idAtiv}&l=${idioma}`)
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
	finalizar: (idAtiv: number, habilidades: any) => {
		return api()
			.post(`/autoanalise?idAtiv=${idAtiv}`, habilidades)
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

export default AutoanaliseService;
