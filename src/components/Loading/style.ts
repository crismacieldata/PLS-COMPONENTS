import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	align-items: center;
	justify-content: center;
	background: var(--grey-background-1);

	& .box-loading {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		border-radius: 5px;
		width: 120px;
		height: 120px;
		border: 1px solid var(--grey-border);
	}
`;
