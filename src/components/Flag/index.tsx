import { ALEMANHA, BRASIL, ESPANHA, FRANCA, INGLATERRA, ITALIA, JAPAO } from './flags-files';

export interface FlagProps {
	id: any;
	height?: number;
}

const Flag = ({ id, height = 25 }: FlagProps) => {
	const getSource = (id: number) => {
		try {
			if (![1, 2, 3, 4, 5, 6, 8].includes(id)) {
				throw new Error(`Flag id "${id}" doesn't exist`);
			}

			switch (id) {
				case 1:
					return INGLATERRA;
				case 2:
					return FRANCA;
				case 3:
					return ESPANHA;
				case 4:
					return BRASIL;
				case 5:
					return ALEMANHA;
				case 6:
					return ITALIA;
				case 8:
					return JAPAO;
			}
		} catch (e) {
			console.error(e);
		}
	};

	if (!id) return <></>;

	return (
		<>
			<img alt={''} src={getSource(id)} style={{ height: `${height}px` }} />
		</>
	);
};

export default Flag;
