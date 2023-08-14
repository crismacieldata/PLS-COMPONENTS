import styled from 'styled-components';

export const Container = styled.div`
	& > .tabs {
		display: flex;
		gap: 3px;
		border-bottom: 1px dashed var(--grey-border);

		> .tab {
			display: flex;
			gap: 3px;
			font-size: 13px;
			font-weight: 500;
			text-transform: uppercase;
			color: var(--blue);
			background-color: var(--grey-background-1);
			padding: 5px 10px;
			border-radius: 5px 5px 0 0;
			opacity: 0.6;
			cursor: pointer;
			@media screen and (max-width: 768px) {
				font-size: 11px;
			}
		}

		> .active {
			opacity: 1;
		}

		> .hide {
			display: none;
		}
	}

	& > .tabs-content {
		> .tab-content {
			border-radius: 0 0 5px 5px;
			padding-top: 5px;

			@media screen and (max-width: 768px) {
				border: none;
				font-size: 11px;
			}
		}
	}
`;
