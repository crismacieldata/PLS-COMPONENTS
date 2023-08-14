import apiv4 from '../api_v4.service';

const ReportService = {
	loadData: (idAval: number, plsid: number, language: number): Promise<any> => {
		return apiv4()
			.get(`/report?idAval=${idAval}&plsid=${plsid}&l=${language}`)
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

export default ReportService;
