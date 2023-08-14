const configEscalas = [
	{
		pls: {
			nivel: 'F1',
			width: 60,
			min: 0,
			max: 9.99
		},
		cef: {
			nivel: 'NU',
			width: 60,
			min: 0,
			max: 9.99
		}
	},
	{
		pls: {
			nivel: 'F1+',
			width: 60,
			min: 10,
			max: 19.99
		}
	},
	{
		pls: {
			nivel: 'F2',
			width: 60,
			min: 20,
			max: 29.99
		},
		cef: {
			nivel: 'A1',
			width: 100,
			min: 20,
			max: 29.99
		}
	},
	{
		pls: {
			nivel: 'F2+',
			width: 60,
			min: 30,
			max: 39.99
		},
		cef: {
			nivel: 'A2',
			width: 100,
			min: 30,
			max: 39.99
		}
	},
	{
		pls: {
			nivel: 'P1',
			width: 60,
			min: 40,
			max: 49.99
		}
	},
	{
		pls: {
			nivel: 'P1+',
			width: 60,
			min: 50,
			max: 59.99
		},
		cef: {
			nivel: 'B1',
			width: 100,
			min: 50,
			max: 59.99
		}
	},
	{
		pls: {
			nivel: 'P2',
			width: 60,
			min: 60,
			max: 69.99
		},
		cef: {
			nivel: 'B2',
			width: 100,
			min: 60,
			max: 69.99
		}
	},
	{
		pls: {
			nivel: 'EXP',
			width: 100,
			min: 70,
			max: 84.99
		},
		cef: {
			nivel: 'C1',
			width: 100,
			min: 70,
			max: 84.99
		}
	},
	{
		pls: {
			nivel: 'MAS',
			width: 100,
			min: 85,
			max: 100
		},
		cef: {
			nivel: 'C2',
			width: 100,
			min: 85,
			max: 100
		}
	}
];

const getConfigEscala = (): any => {
	return configEscalas;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const getBg = (escala: 'pls' | 'cef', nivel: string) => {
	switch (nivel) {
		case 'F1':
		case 'NU':
			return '#ffa000';
		case 'F1+':
			return '#ffca28';
		case 'F2':
		case 'A1':
			return '#ffeb3b';
		case 'F2+':
		case 'A2':
			return '#f4ff81';
		case 'P1':
			return '#dce775';
		case 'P1+':
		case 'B1':
			return '#9ccc65';
		case 'P2':
		case 'B2':
			return '#66bb6a';
		case 'EXP':
		case 'C1':
			return '#00897b';
		case 'MAS':
		case 'C2':
			return '#00796b';
		default:
			return 'var(--grey-background-1)';
	}
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const getColor = (escala: 'pls' | 'cef', nivel: string) => {
	return 'var(--grey-500)';
};

const UtilsService = {
	getBg,
	getColor,
	getConfigEscala
};

export default UtilsService;
