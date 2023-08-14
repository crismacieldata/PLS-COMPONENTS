import { Container } from './style.ts';

interface QuantifyProps {
	value: any;
	title?: any;
}

const Quantify = ({ value, title }: QuantifyProps) => {
	return (
		<Container>
			<div className={'contentQuant'}>
				<strong className={'strongValue'}>{value}</strong>
				<strong>{title}</strong>
			</div>
		</Container>
	);
};

export default Quantify;
