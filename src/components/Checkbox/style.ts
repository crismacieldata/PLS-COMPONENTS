import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	display: inline-flex;
	align-items: center;
	gap: 8px;
	overflow: hidden;
	//height: 32px;

	input {
		position: absolute;
		left: -999px;
	}

	&:hover {
		cursor: pointer;
	}

	> .check {
		position: relative;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--grey-background-3);
		width: 18px;
		height: 18px;
		border-radius: 5px;

		&.checked {
			background: var(--blue-button);
		}

		> svg {
			color: var(--white);
			width: 13px;
			height: 13px;
		}
	}
`;
