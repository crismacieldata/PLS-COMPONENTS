import apiv4 from '../api_v4.service';

const EstiloaprendizagemService = {
	getEstiloAprendizagem: (ativId: number, language: number): Promise<any> => {
		return apiv4()
			.get(`/estiloaprendizagem?idAtiv=${ativId}&l=${language}`)
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
	salvar: (ativId: number, respostas: any) => {
		return apiv4()
			.post(`/estiloaprendizagem/${ativId}`, respostas)
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

export default EstiloaprendizagemService;
