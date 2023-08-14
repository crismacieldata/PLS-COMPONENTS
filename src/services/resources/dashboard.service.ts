import api from '../api_v4.service';

const DashboardService = {
	banners: (): Promise<any> => {
		return api()
			.get('/dashboard/banners')
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
	},
	atividadesNaoVinculadas: (): Promise<any> => {
		return api()
			.get('/atividades/sem-vinculo')
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
	},
	ultimasAvaliacoes: (): Promise<any> => {
		return api()
			.get('/dashboard/ultimas-avaliacoes')
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
	},
	certificacoes: (): Promise<any> => {
		return api()
			.get('/dashboard/certificacoes')
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
	},
	aceite: (aceite: boolean, cpf?: null | string): Promise<any> => {
		return api()
			.post('/dashboard/aceite', {
				aceite,
				cpf
			})
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
	},
	alterarSenha: (senha: string): Promise<any> => {
		return api()
			.post('/dashboard/alterar-senha', {
				senha
			})
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

export default DashboardService;
