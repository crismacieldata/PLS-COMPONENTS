import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Container } from './style';

interface StarsProps {
	value: number;
	onChange: (stars: number) => void;
}

const Stars = ({ value = 0, onChange }: StarsProps) => {
	const [startsNumber, setStartsNumber] = useState<number>(value);

	const onChangeStars = (stars: number) => {
		setStartsNumber(stars);
		onChange(stars);
	};

	if (startsNumber < 0 || startsNumber > 5) {
		throw new Error('Valor inválido.');
	}
	const renderStars = () => {
		return [1, 2, 3, 4, 5].map(i => {
			return startsNumber !== null && i <= startsNumber ? (
				<AiFillStar onClick={() => onChangeStars(i)} key={i} className="checked" />
			) : (
				<AiFillStar onClick={() => onChangeStars(i)} key={i} />
			);
		});
	};

	return <Container>{renderStars()}</Container>;
};

export default Stars;
