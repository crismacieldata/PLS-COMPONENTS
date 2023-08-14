import axios from 'axios';
import SessionService from './session.service';

const DEV = false; // Set to false for production
export const BASE_URL = DEV ? 'http://localhost:5000/api/v4' : 'https://apis.pls.com.br/api/v4';

export default () => {
	if (!SessionService.getHashToken()) {
		return axios.create({
			baseURL: BASE_URL
		});
	}

	return axios.create({
		baseURL: BASE_URL,
		headers: {
			Authorization: `Bearer ${SessionService.getHashToken()}`
		}
	});
};
