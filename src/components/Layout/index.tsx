import { useState } from 'react';
import classnames from 'classnames';
import {
	BaseHeader,
	BaseHeaderMobile,
	BaseMenuMobile,
	Container,
	Content,
	DesktopBase,
	DesktopMenu,
	Footer,
	MobileBase
} from './style';
import LogoPls from '../LogoPls';
import Avatar from '../Avatar';
import SessionService from '../../services/session.service';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TranslateService } from '../../services/translate.service';
import MultiLanguage from '../MultiLanguage';
import AlterarSenha from '../Login/AlterarSenha';
import Modal from '../Modal';
import { useModalContext } from '../../hooks/useModal';
import dayjs from 'dayjs';

interface LayoutProps {
	children: any;
}

const Layout = ({ children }: LayoutProps) => {
	return <Container>{children}</Container>;
};

const MenuDesktop = () => {
	const location = useLocation();

	const getActive = (path: string) => {
		return location.pathname === path ? 'act' : undefined;
	};

	return (
		<>
			<DesktopMenu>
				<NavLink to="/dashboard" className={getActive('/dashboard')}>
					{TranslateService.translate('_Menu', 'Dashboard')}
				</NavLink>
				<NavLink to="/avaliacoes" className={getActive('/avaliacoes')}>
					{TranslateService.translate('_Menu', 'Avaliações')}
				</NavLink>
				<NavLink to="/atividades" className={getActive('/atividades')}>
					{TranslateService.translate('_Menu', 'Atividades')}
				</NavLink>
				<NavLink to="/sessoes" className={getActive('/sessoes')}>
					{TranslateService.translate('_Menu', 'Sessões')}
				</NavLink>
				<NavLink to="/recursos" className={getActive('/recursos')}>
					{TranslateService.translate('_Menu', 'Recursos')}
				</NavLink>
				<NavLink to="/documentos" className={getActive('/documentos')}>
					{TranslateService.translate('_Menu', 'Documentos')}
				</NavLink>
				<NavLink to="/certificacoes" className={getActive('/certificacoes')}>
					{TranslateService.translate('_Menu', 'Certificações')}
				</NavLink>
			</DesktopMenu>
		</>
	);
};

const MenuMobile = (props: any) => {
	return (
		<BaseMenuMobile>
			<a onClick={props.toggle}>
				<GiHamburgerMenu />
			</a>
		</BaseMenuMobile>
	);
};

const HeaderDesktop = () => {
	const { open } = useModalContext();
	const [toggleDropdown, setToggleDropdown] = useState(false);
	const [displayNone, setDisplayNone] = useState(true);
	const token: any = SessionService.getToken();
	const user = token?.data;
	const navigate = useNavigate();

	const toggleShow = () => {
		setDisplayNone(false);
		setTimeout(() => {
			setToggleDropdown(true);
		}, 50);
	};

	const toggleHide = () => {
		setTimeout(() => {
			setDisplayNone(true);
		}, 500);
		setToggleDropdown(false);
	};

	const getDate = () => {
		return dayjs().format('DD/MM/YYYY HH:mm:ss');
	};

	const logout = () => {
		SessionService.removeToken();
		navigate('/login');
	};

	const renderAlteraSenha = () => {
		return <AlterarSenha />;
	};

	return (
		<BaseHeader>
			<div className={'_headerContainer'}>
				<a href="##">
					<LogoPls />
				</a>
				<div className={'_headerContent'}>
					<span style={{ visibility: 'hidden' }}>{getDate()}</span>
					<MultiLanguage />
					<div>
						<strong style={{ color: 'var(--grey)' }}>{TranslateService.translate('_Dashboard', 'Olá')}, </strong>
						<strong style={{ color: 'var(--blue-knob)' }}>{user?.name.split(' ')[0]}</strong>
					</div>
					<div className="profile">
						<Avatar onMouseOver={toggleShow} />
						<div
							onMouseOver={toggleShow}
							onMouseLeave={toggleHide}
							className={classnames('dropdown-menu', 'shadow-gray', {
								show: toggleDropdown,
								none: displayNone
							})}>
							<header>
								<Avatar />
								<div className="profile-data">
									<strong>{user?.name}</strong>
									<span>{user?.company}</span>
								</div>
							</header>
							<hr />
							<div className="links">
								<a onClick={() => open('alterarSenha')}>
									{TranslateService.translate('_Dashboard', 'Alterar Senha')}
									<Modal name={'alterarSenha'} title={'Alterar Senha'}>
										{renderAlteraSenha()}
									</Modal>
								</a>
								<a onClick={logout}>{TranslateService.translate('_Dashboard', 'Sair')}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</BaseHeader>
	);
};

const HeaderMobile = () => {
	const [showMenu, setShowMenu] = useState(false);
	const location = useLocation();

	const toggleShowMenu = () => {
		setShowMenu(!showMenu);
	};

	const getActive = (path: string) => {
		return location.pathname === path ? 'act' : undefined;
	};

	return (
		<BaseHeaderMobile>
			<div className="row1">
				<div>
					<LogoPls />
				</div>
				<MenuMobile toggle={toggleShowMenu} />
			</div>
			{showMenu && (
				<div className="row2">
					<NavLink to="/dashboard" className={getActive('/dashboard')}>
						{TranslateService.translate('_Menu', 'Dashboard')}
					</NavLink>
					<NavLink to="/avaliacoes" className={getActive('/avaliacoes')}>
						{TranslateService.translate('_Menu', 'Avaliações')}
					</NavLink>
					<NavLink to="/atividades" className={getActive('/atividades')}>
						{TranslateService.translate('_Menu', 'Atividades')}
					</NavLink>
					<NavLink to="/sessoes" className={getActive('/sessoes')}>
						{TranslateService.translate('_Menu', 'Sessões')}
					</NavLink>
					<NavLink to="/recursos" className={getActive('/recursos')}>
						{TranslateService.translate('_Menu', 'Recursos')}
					</NavLink>
					<NavLink to="/documentos" className={getActive('/documentos')}>
						{TranslateService.translate('_Menu', 'Documentos')}
					</NavLink>
					<NavLink to="/certificacoes" className={getActive('/certificacoes')}>
						{TranslateService.translate('_Menu', 'Certificações')}
					</NavLink>
				</div>
			)}
		</BaseHeaderMobile>
	);
};

const Desktop = (props: any) => {
	return (
		<DesktopBase>
			<HeaderDesktop />
			<MenuDesktop />
			<Content>{props.children}</Content>
			<Footer>
				<div>Paradigm Language Support - 2023</div>
				<div>
					version: <span>{getVersion()}</span>
				</div>
			</Footer>
		</DesktopBase>
	);
};
Layout.Desktop = Desktop;

const Mobile = (props: any) => {
	return (
		<MobileBase>
			<HeaderMobile />
			<Content>{props.children}</Content>
			<Footer>
				<div>Paradigm Language Support - 2023</div>
				<div>
					version: <span>{getVersion()}</span>
				</div>
			</Footer>
		</MobileBase>
	);
};
Layout.Mobile = Mobile;

const getVersion = () => {
	return import.meta.env.VITE_APP_VERSION;
};

export default Layout;
