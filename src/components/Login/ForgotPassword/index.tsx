import { useState } from 'react';
import { Container } from '../style';
import BackgroundImage from '../background.jpg';
import LogoPls from '../../../components/LogoPls';
import Button from '../../../components/Buttons/Button';
import { TranslateService } from '../../../services/translate.service';
import SenhaService from '../../../services/resources/senha.service';
import AlertService from '../../../services/alert.service';

interface FotgotPasswordProps {
	onBack: (a: boolean) => void;
}

const ForgotPassword = ({ onBack }: FotgotPasswordProps) => {
	const [email, setEmail] = useState<string>('');

	const onRecuperarSenha = async (e: any) => {
		e.preventDefault();

		if (email !== '') {
			await SenhaService.recuperarSenha(email).then(() => {
				AlertService.success('E-mail enviado com sucesso!');
			});
		}

		return false;
	};

	const onChange = (e: any) => {
		setEmail(e.target.value);
	};

	return (
		<Container style={{ backgroundImage: `url(${BackgroundImage})` }}>
			<div className="form">
				<form onSubmit={onRecuperarSenha} className="shadow-gray">
					<div className="form-group center">
						<LogoPls height={80} />
					</div>
					<div className="form-group">
						<h4>{TranslateService.translate('_Login', 'Recuperar senha')}</h4>
						<input
							onChange={onChange}
							type="email"
							required
							placeholder={TranslateService.translate('_Login', 'Digite seu e-mail')}
						/>
					</div>
					<div className="form-group center buttons">
						<Button onClick={() => onBack(false)}>{TranslateService.translate('_Login', 'Voltar')}</Button>
						<Button onClick={onRecuperarSenha} theme={'primary'}>
							{TranslateService.translate('_Login', 'Recuperar')}
						</Button>
					</div>
				</form>
			</div>
		</Container>
	);
};

export default ForgotPassword;
