import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	height: 25px;
	font-size: 13px;
	border-radius: 3px;
	border: 1px solid var(--grey-border);
	gap: 5px;
	padding: 0 5px;

	&.theme {
		background: var(--white);
		font-weight: bold;
	}

	> .data {
		display: flex;
		gap: 3px;
		width: 100%;
		align-items: center;
		justify-content: center;

		span {
			display: flex;
			color: var(--grey-500);
			align-items: center;
		}
	}

	> svg {
		font-size: 16px;
	}
`;
