import styled from 'styled-components';

export const Container = styled.div`
	> .modal-box {
		background: var(--white);
		border-radius: 5px;

		> .modal-header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10px;
			border-radius: 5px 5px 0 0;
			border-bottom: 1px solid var(--grey-background-3);
			background: var(--grey-background-1);

			a {
				display: flex;
				align-items: center;

				svg {
					color: var(--blue);
					font-size: 18px;
				}
			}

			h4 {
				display: flex;
				align-items: center;
				color: var(--blue);
				text-transform: uppercase;
			}
		}

		> .modal-content {
			padding: 10px;
			overflow-y: scroll;
			max-height: 41rem;
		}

		@media screen and (min-width: 1400px) {
			> .modal-content {
				max-height: 51rem;
			}
		}
	}
`;
