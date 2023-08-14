import { Container } from './style';

interface CardProps {
	children: any;
	title: any;
	navigation?: any;
	actions?: any;
}

const Card = ({ children, title, actions, navigation }: CardProps) => {
	return (
		<Container>
			<div className={'headerCard'}>
				<div className={'titleCard'}>
					{title}
					{navigation && <span className={'navigation'}>{navigation}</span>}
				</div>
				{actions && <div className={'actions'}>{actions}</div>}
			</div>
			<div className="content">{children}</div>
		</Container>
	);
};

export default Card;
