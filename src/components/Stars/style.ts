import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;

	svg {
		font-size: 22px;
		color: var(--grey-background-3);

		&:hover {
			cursor: pointer;
		}

		&.checked {
			color: #eccd1c;
		}
	}
`;
