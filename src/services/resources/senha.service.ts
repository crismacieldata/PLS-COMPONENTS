import axios from 'axios';

const SenhaService = {
	recuperarSenha: (email: string): Promise<any> => {
		return axios.get(`https://api.pls.com.br/api/sendmail?type=recpwd&email=${email}`).catch((e: any) => {
			throw e;
		});
	}
};

export default SenhaService;
