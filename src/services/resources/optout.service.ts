import api from '../api_v4.service.ts';

const OptoutService = {
	unsubscribe: (plsid: number): Promise<any> => {
		return api()
			.get(`/unsubscribe?p=${plsid}`)
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

export default OptoutService;
