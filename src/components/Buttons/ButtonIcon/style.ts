import styled from 'styled-components';

export const Container = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: 0;
	border-radius: 5px;
	width: 25px;
	height: 25px;
	cursor: pointer;
	transition: box-shadow ease-in 0.2s;

	&:disabled {
		opacity: 0.4;
	}

	&:hover {
		-webkit-box-shadow: 0 0 5px 1px rgba(186, 182, 186, 1);
		-moz-box-shadow: 0 0 5px 1px rgba(186, 182, 186, 1);
		box-shadow: 0 0 5px 1px rgba(186, 182, 186, 1);
	}

	@media screen and (max-width: 768px) {
		&:hover {
			-webkit-box-shadow: 0 0 0 0 rgba(186, 182, 186, 1);
			-moz-box-shadow: 0 0 0 0 rgba(186, 182, 186, 1);
			box-shadow: 0 0 0 0 rgba(186, 182, 186, 1);
		}
	}
`;
