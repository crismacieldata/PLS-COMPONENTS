import JwtService from './jwt.service';
import jwtDecode from 'jwt-decode';

const getToken = () => {
	const storage: string | null = localStorage.getItem('token');
	return JwtService.verify(storage);
};

type TokenDataType = {
	name: string;
	company: string;
	email: string;
	plsid: number;
	idiomaPadrao: number;
	aceiteCertificacao: boolean;
};

const SessionService = {
	getToken,
	getHashToken: () => {
		return localStorage.getItem('token') ?? '';
	},
	createToken: (value: any) => {
		return new Promise<boolean>(resolve => {
			localStorage.removeItem('token');
			localStorage.setItem('token', value);
			resolve(true);
		});
	},
	checkToken: () => {
		const tokenStorage = getToken();
		if (tokenStorage) {
			const { exp }: any = tokenStorage;
			return Date.now() < exp * 1000;
		}
	},
	removeToken: () => {
		localStorage.removeItem('token');
		sessionStorage.clear();
	},
	getTokenData: (): TokenDataType => {
		const tokenData: any = jwtDecode(SessionService.getHashToken());
		return tokenData.data;
	}
};

export default SessionService;
