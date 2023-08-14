import { decodeToken } from 'react-jwt';

const JwtService = {
	verify: (token: string | null) => {
		if (!token) return;

		return decodeToken(token);
	}
};

export default JwtService;
