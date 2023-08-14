import apiv4 from '../api_v4.service';

const VideoaskService = {
	finalizarTeste: (idAtiv: string, contactId: string): Promise<any> => {
		return apiv4()
			.get(`/videoask/finalize?idAtiv=${idAtiv}&contactId=${contactId}`)
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

export default VideoaskService;
