import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	border: 1px solid var(--border-card);
	border-radius: 5px;
	padding: 10px 15px;

	> .headerCard {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid var(--border-card);
		> .actions {
			display: flex;
			height: 100%;
			align-items: center;
			padding-bottom: 5px;
		}

		> .titleCard {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			text-transform: uppercase;
			font-size: 18px;
			color: var(--blue);
			font-weight: 700;
			margin-bottom: 5px;

			> .navigation {
				display: flex;
				font-size: 10px;
				color: var(--gray-600);
				height: 100%;
			}
			@media screen and (max-width: 768px) {
				font-size: 15px;
			}
		}
	}

	> .content {
		padding-top: 15px;
	}

	@media screen and (max-width: 768px) {
		padding: 5px 5px;

		> h2 {
			font-size: 12px;
			font-weight: 500;
			margin-top: 5px;

			> .actions {
				gap: 5px;
				padding-bottom: 5px;
			}
		}

		> .content {
			padding-top: 5px;
			font-size: 10px;
		}
	}
`;
