import api from '../api.service';
import apiv4 from '../api_v4.service';

const RecursoService = {
	concluido: (recId: number, value: boolean): Promise<any> => {
		return api()
			.put('/recursos/concluido', {
				recId,
				concluido: value
			})
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
	estrelas: (recId: number, stars: number): Promise<any> => {
		return api()
			.put('/recursos/estrelas', {
				recId,
				estrelas: stars
			})
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
	getRecursos: (): Promise<any> => {
		return apiv4()
			.get('/recursos')
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
	getRecursosFiltro: (data: any): Promise<any> => {
		return api()
			.get(`/recursos?q=${data}`)
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

export default RecursoService;
