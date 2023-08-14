import { useEffect, useState } from 'react';
import { Container } from './style';
import LogoPls from '../../components/LogoPls';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from './background.jpg';
import ForgotPassword from './ForgotPassword';
import { SubmitHandler, useForm } from 'react-hook-form';
import LoginService from '../../services/resources/login.service';
import SessionService from '../../services/session.service';
import Button from '../../components/Buttons/Button';
import { TranslateService } from '../../services/translate.service';

export interface LoginInput {
	email: string;
	password: string;
}

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginInput>();
	const [forgotPasswordScreen, setForgotPasswordScreen] = useState(false);
	const [error, setError] = useState(false);
	const [disabledButton, setDisabledButton] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (SessionService.checkToken()) {
			navigate('/dashboard');
		} else {
			navigate('/login');
		}
	}, []);

	const onSignIn: SubmitHandler<LoginInput> = async ({ email, password }: LoginInput) => {
		try {
			setError(false);
			setDisabledButton(true);

			const { token } = await LoginService.signIn(email, password);
			SessionService.createToken(token).then(() => {
				const tokenData = SessionService.getTokenData();
				if (tokenData.aceiteCertificacao !== null) {
					sessionStorage.setItem('verDepois', 'true');
				}
				localStorage.setItem('language', String(tokenData.idiomaPadrao));
				setDisabledButton(false);

				setTimeout(() => {
					navigate('/dashboard');
				}, 500);
			});
		} catch (e: any) {
			setDisabledButton(false);
			setError(e.message);
		}
	};

	if (forgotPasswordScreen) {
		return <ForgotPassword onBack={setForgotPasswordScreen} />;
	}

	return (
		<Container style={{ backgroundImage: `url(${BackgroundImage})` }}>
			<div className="form">
				<form onSubmit={handleSubmit(onSignIn)} className="shadow-gray">
					<div className="form-group center">
						<LogoPls height={80} />
					</div>
					<div className="form-group">
						<input
							type="text"
							placeholder={TranslateService.translate('_Login', 'Usuário')}
							{...register('email', { required: TranslateService.translate('_Login', 'E-mail obrigatório') })}
						/>
						{errors?.email && <div className="form-error">{errors.email?.message}</div>}
					</div>
					<div className="form-group">
						<input
							type="password"
							placeholder={TranslateService.translate('_Login', 'Senha')}
							{...register('password', { required: TranslateService.translate('_Login', 'Senha obrigatória') })}
						/>
						{errors?.password && <div className="form-error">{errors.password?.message}</div>}
					</div>
					<div className="form-group center">
						<a onClick={() => setForgotPasswordScreen(true)}>
							{TranslateService.translate('_Login', 'Esqueceu a senha?')}{' '}
						</a>
					</div>
					<div className="form-group center enter">
						<Button disabled={disabledButton} type={'submit'} theme={'primary'}>
							{TranslateService.translate('_Login', 'Entrar')}
						</Button>
					</div>
					{error && (
						<div className="form-group center">
							<div className="form-error">{error}</div>
						</div>
					)}
				</form>
			</div>
		</Container>
	);
};

export default Login;
