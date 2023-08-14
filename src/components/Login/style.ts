import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	height: 100vh;
	align-items: center;
	background-size: cover;
	background-position: center center;
	position: relative;
	overflow: hidden;
	padding: 0 10%;

	@media screen and (max-width: 1080px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow: auto;
		min-width: 360px;
		gap: 50px;
		padding: 0 15px;
		height: 100vh;
	}

	> .brand {
		display: flex;
		flex-direction: column;
		color: var(--white);
		font-size: 18px;
		z-index: 2;

		@media screen and (max-width: 1080px) {
			font-size: 11px;
			width: 100%;
		}
	}

	> .form {
		display: flex;
		justify-content: center;
		z-index: 2;

		> form {
			display: inline-flex;
			flex-direction: column;
			background-color: var(--grey-background-1);
			border-radius: 5px;
			padding: 50px;
			gap: 15px;

			> .form-group {
				&.right {
					text-align: center;
				}

				&.center {
					display: flex;
					justify-content: center;
				}

				&.buttons {
					display: flex;
					gap: 15px;
				}

				&.enter button {
					font-size: 15px;
					padding: 20px 25px;

					&:focus {
						box-shadow: 0 0 5px var(--blue-button);
					}
				}
			}

			@media screen and (max-width: 1080px) {
				padding: 20px;
			}
		}

		a {
			color: var(--blue);
		}
	}
`;
