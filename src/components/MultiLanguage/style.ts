import styled from 'styled-components';

export const Container = styled.div`
	&:hover {
		& > .lista-idiomas {
			display: flex;
		}

		& > .idioma-selecionado {
			display: none;
		}
	}

	& > .idiomas {
		display: flex;
		gap: 10px;
		border-radius: 50px;
		padding: 5px;
		height: 45px;

		& > div {
			overflow: hidden;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 35px;
			width: 35px;
			color: white;
			border-radius: 50%;
			cursor: pointer;
		}
	}

	& > .idioma-selecionado {
		width: 45px;
		display: flex;
	}

	& > .lista-idiomas {
		display: none;
	}
`;
