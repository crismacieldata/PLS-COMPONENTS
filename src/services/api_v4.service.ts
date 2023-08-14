import axios from 'axios';
import SessionService from './session.service';

export const BASE_URL = import.meta.env.VITE_API_URL;

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
