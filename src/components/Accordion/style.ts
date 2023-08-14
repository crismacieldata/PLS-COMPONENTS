import styled from 'styled-components';

export const Container = styled.div`
	> .header {
		display: grid;
		grid-template-columns: 26px 1fr;
		align-items: center;
		height: 40px;
		background-color: var(--bg-gray-100);
		border: 1px solid var(--border-accordion);
		padding: 0 10px;
		border-radius: 5px;
		cursor: pointer;

		.content-header {
			overflow: hidden;
			flex-wrap: wrap;
		}

		&.openFixed,
		&.closedFixed {
			grid-template-columns: 0 1fr;
			cursor: default;
		}

		> .arrow {
			display: flex;
			align-items: center;

			&.disabled {
				opacity: 0.3;
			}

			&.opened {
				svg {
					transform: rotate(90deg);
				}
			}

			svg {
				font-size: 18px;
				color: var(--gray-800);
			}
		}

		&.open {
			border-radius: 5px 5px 0 0;
		}

		&.no-cursor {
			cursor: auto;
		}
		@media screen and (max-width: 768px) {
			font-size: 12px;
			padding: 0 5px;
		}
	}

	> .content {
		padding: 10px;
		border: 1px solid var(--border-accordion);
		border-top: 0;
		border-radius: 0 0 5px 5px;

		&.bgContentColorRed {
			background: var(--red-light);
		}

		&.bgContentColorGreen {
			background: var(--green-bg);
		}

		@media screen and (max-width: 768px) {
			padding: 5px;
		}
	}
`;
