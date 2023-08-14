import { useState } from 'react';
import { Container } from './style';
import LogoPls from '../../../components/LogoPls';
import { TranslateService } from '../../../services/translate.service';
import Button from '../../../components/Buttons/Button';
import AlertService from '../../../services/alert.service';
import DashboardService from '../../../services/resources/dashboard.service';

const AlterarSenha = () => {
	const [senha, setSenha] = useState('');
	const [confirmarSenha, setConfirmarSenha] = useState('');
	const [erro, setErro] = useState<any>();

	const onChange = (e: any, campo: string) => {
		if (campo === 'senha') {
			setSenha(e.target.value);
		}

		if (campo === 'confSenha') {
			setConfirmarSenha(e.target.value);
		}
	};

	const onAlterar = async (e: any) => {
		e.preventDefault();
		setErro(null);

		if (senha.length < 4) {
			return setErro(TranslateService.translate('_Login', 'A senha deve conter no mímino 4 caracteres'));
		}

		if (senha !== confirmarSenha) {
			return setErro(TranslateService.translate('_Login', 'Confirmação de Senha Inválida'));
		}

		await DashboardService.alterarSenha(senha).then(() => {
			AlertService.success(TranslateService.translate('_Login', 'Senha alterada com sucesso.'));
		});
	};

	return (
		<Container>
			<div className="form">
				<form onSubmit={onAlterar} className="shadow-gray">
					<div className="form-group center">
						<LogoPls height={80} />
					</div>
					<div className="form-group">
						<div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
							<input
								onChange={(e: any) => onChange(e, 'senha')}
								type="password"
								placeholder={TranslateService.translate('_Login', 'Digite sua senha')}
							/>
							<input
								onChange={(e: any) => onChange(e, 'confSenha')}
								type="password"
								placeholder={TranslateService.translate('_Login', 'Repita sua senha')}
							/>
							{erro && <p style={{ color: 'var(--red)' }}>{erro}</p>}
						</div>
					</div>
					<div className="form-group center buttons">
						<Button theme={'primary'}>{TranslateService.translate('_Login', 'Alterar')}</Button>
					</div>
				</form>
			</div>
		</Container>
	);
};

export default AlterarSenha;
