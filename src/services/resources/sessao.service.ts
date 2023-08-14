import api from '../api_v4.service.ts';

const SessaoService = {
	getSessoes: (): Promise<any> => {
		return api()
			.get('/sessoes')
			.then((res: any) => res.data)
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

export default SessaoService;
