import apiv4 from '../api_v4.service';

const AgendamentoService = {
	agendar: (
		aval: number,
		date: string,
		emp: number,
		horario: number,
		idioma: number,
		plsid: number,
		respPlsid: number,
		tipo: number
	): Promise<any> => {
		return apiv4()
			.get(
				`/agendamento/agendar?aval=${aval}&date=${date}&emp=${emp}&horario=${horario}&idioma=${idioma}&plsid=${plsid}&respPlsid=${respPlsid}&tipo=${tipo}`
			)
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
	cancelarAgendamento: (idAval: number): Promise<any> => {
		return apiv4()
			.get(`/agendamento/cancelar?aval=${idAval}`)
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
	getAgendamento: (idAval: any): Promise<any> => {
		return apiv4()
			.get(`/agendamento?idAval=${idAval}`)
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
	getEntrevista: (idAval: number): Promise<any> => {
		return apiv4()
			.get(`agendamento/entrevista?idAval=${idAval}`)
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
	getHorarios: (inicio: string, fim: string, idAgtempo: number, idEmp: number, idIdaval: number): Promise<any> => {
		return apiv4()
			.get(`agendamento/horarios?ini=${inicio}&fim=${fim}&idAgtempo=${idAgtempo}&idEmp=${idEmp}&idioma=${idIdaval}`)
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

export default AgendamentoService;
