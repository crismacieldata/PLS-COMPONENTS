import api from '../api_v4.service';

const DocumentoService = {
	getDocs: (): Promise<any> => {
		return api()
			.get('/documentos')
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

	download: (filename: string): Promise<any> => {
		return api()
			.get(`/download/${filename}`)
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
	getSignedFile: (filename: string): Promise<any> => {
		return api()
			.get(`/documentos/${filename}`)
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

export default DocumentoService;
