import api from '../api_v4.service';

const LoginService = {
	signIn: (email: string, password: string): Promise<any> => {
		return api()
			.post('/auth', { username: email, password })
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

export default LoginService;
