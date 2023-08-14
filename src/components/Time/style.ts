import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	height: 25px;
	font-size: 13px;
	border-radius: 3px;
	border: 1px solid var(--grey-border);
	//gap: 3px;
	//padding: 0 5px;
	width: 73px;

	> svg {
		font-size: 13px;
	}

	@media screen and (max-width: 768px) {
		font-size: 10px;
		width: 60px;
	}

	> svg {
		font-size: 10px;
	}
`;
