import { Container } from './style';
import Flag from '../Flag';
// import { useNavigate } from 'react-router-dom';

const MultiLanguage = () => {
	// const navigate = useNavigate();

	// const onSelect = (idioma: number) => {
	// 	setIdioma(idioma);
	// };
	//
	// const setIdioma = (idioma: number) => {
	// 	localStorage.setItem('language', String(idioma));
	// 	setIdiomaPadrao(Number(idioma));
	// 	navigate(0);
	// };

	return (
		<Container>
			<div className="idiomas lista-idiomas shadow-gray">
				<div>
					<Flag id={4} />
				</div>
				<div>
					<Flag id={1} />
				</div>
				<div>
					<Flag id={3} />
				</div>
			</div>
			<div className="idiomas idioma-selecionado shadow-gray">
				<div>
					<Flag id={1} />
				</div>
			</div>
		</Container>
	);
};

export default MultiLanguage;
