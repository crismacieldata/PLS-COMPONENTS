import { useState } from 'react';
import { Container } from './style';
import Flag from '../Flag';
import { useNavigate } from 'react-router-dom';

const languageLocalStorage = localStorage.getItem('language');

const MultiLanguage = () => {
	const navigate = useNavigate();

	const [idiomaPadrao, setIdiomaPadrao] = useState<string | number | null>(Number(languageLocalStorage));

	const onSelect = (idioma: number) => {
		setIdioma(idioma);
	};

	const setIdioma = (idioma: number) => {
		localStorage.setItem('language', String(idioma));
		setIdiomaPadrao(Number(idioma));
		navigate(0);
	};

	const mapIdiomaFlag = () => {
		switch (idiomaPadrao) {
			case 1:
				return 4;
			case 2:
				return 1;
			case 3:
				return 3;
		}
	};

	return (
		<Container>
			<div className="idiomas lista-idiomas shadow-gray">
				<div onClick={() => onSelect(1)}>
					<Flag id={4} />
				</div>
				<div onClick={() => onSelect(2)}>
					<Flag id={1} />
				</div>
				<div onClick={() => onSelect(3)}>
					<Flag id={3} />
				</div>
			</div>
			<div className="idiomas idioma-selecionado shadow-gray">
				<div>
					<Flag id={mapIdiomaFlag()} />
				</div>
			</div>
		</Container>
	);
};

export default MultiLanguage;
