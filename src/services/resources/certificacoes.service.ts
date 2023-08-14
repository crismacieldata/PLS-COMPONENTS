import api from '../api.service';

const CertificacaoService = {
	getCertificados: (): Promise<any> => {
		return api()
			.get('/certificacoes')
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

export default CertificacaoService;
