import { Container } from './style';
import AnonImg from './img.png';

const Avatar = (props: any) => {
	return (
		<Container {...props}>
			<img src={AnonImg} alt={''} className="shadow-gray" />
		</Container>
	);
};

export default Avatar;
