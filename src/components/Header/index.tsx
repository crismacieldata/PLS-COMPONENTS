import { Container } from './style.ts';
import LogoPls from '../LogoPls';
import Avatar from '../Avatar';
import MultiLanguage from '../MultiLanguage';

const Header = () => {
	return (
		<Container>
			<a href="xx">
				<LogoPls />
			</a>
			<div className={'contentAvatar'}>
				<MultiLanguage />
				<span>
					<strong style={{ color: 'var(--text-gray-900)' }}>Olá, </strong>
					<strong style={{ color: 'var(--text-blue-middle)' }}>Usuário</strong>
				</span>
				<Avatar />
			</div>
		</Container>
	);
};

export default Header;
