import { Container } from './style';
import { BsFillClockFill } from 'react-icons/bs';

interface TimeProps {
	time: number | string;
	theme?: 'default' | 'red';
}

const Time = ({ time, theme = 'default' }: TimeProps) => {
	return (
		<Container className={theme}>
			<BsFillClockFill />
			{`${time} min`}
		</Container>
	);
};

export default Time;
