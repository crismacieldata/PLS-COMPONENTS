import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 110px;
	padding: 0 0 10px 0;

	> .contentQuant {
		display: flex;
		gap: 5px;
		font-weight: bold;
		border: 1px solid var(--grey-border);
		border-radius: 3px;
		padding: 5px;
		grid-column: 2;
		justify-content: center;
		align-items: flex-end;

		> .strongValue {
			display: flex;
			align-items: center;
			justify-content: center;
			min-width: 20px;
			max-width: 40px;
			background: var(--grey-border);
			border: 1px solid var(--grey-border);
			padding: 0 3px;
			border-radius: 2px;
		}

		@media screen and (max-width: 768px) {
			font-size: 11px;
		}
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr 95px;
		padding: 5px 0;
	}
`;
