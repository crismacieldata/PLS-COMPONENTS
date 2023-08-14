import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-width: 360px;
`;

export const BaseHeader = styled.header`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 10px;

	& ._headerContainer {
		display: flex;
		justify-content: space-between;
	}

	& ._headerContent {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	& .profile {
		cursor: pointer;
		position: relative;

		> .dropdown-menu {
			position: absolute;
			right: 0;
			background: var(--grey-background-1);
			border-radius: 5px;
			min-width: 250px;
			opacity: 0;
			transition:
				top 0.5s,
				opacity 0.5s;
			top: 66px;
			z-index: 999;

			&.show {
				top: 46px;
				opacity: 1;
			}

			&.none {
				display: none;
			}

			> hr {
				margin: 0;
			}

			header {
				display: flex;
				gap: 10px;
				padding: 15px;

				> .profile-data {
					display: flex;
					flex-direction: column;
				}
			}

			.links {
				display: flex;
				justify-content: space-around;
				padding: 15px;

				> a {
					color: var(--grey-color);
					font-weight: bold;
				}
			}
		}
	}
`;

export const BaseHeaderMobile = styled.header`
	display: flex;
	flex-direction: column;
	width: 100%;

	& .row1 {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
	}

	& .row2 {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 15px 10px;
		border-top: 1px solid var(--grey-border);
		border-bottom: 1px solid var(--grey-border);

		& > a {
			display: flex;
			gap: 5px;
			align-items: center;
			color: var(--grey-500);
			padding: 5px 15px;

			&.active {
				background: var(--grey-background-1);
				border-radius: 3px;
			}
		}
	}
`;

export const DesktopMenu = styled.section`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 0 10px;
	background-color: var(--blue);
	height: 70px;
	color: var(--white);

	> a {
		font-size: 14px;
		font-weight: 500;
		padding: 2px 8px;
		color: white;
		text-transform: uppercase;

		&.act {
			border: 1px solid var(--white);
			color: var(--white);
			border-radius: 5px;
		}
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const DesktopBase = styled.section`
	display: flex;
	flex-direction: column;
	position: relative;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const MobileBase = styled.section`
	@media screen and (min-width: 769px) {
		display: none;
	}
`;

export const BaseMenuMobile = styled.div`
	& > a {
		color: var(--grey-color);
		font-size: 1.5rem;
	}
`;

export const Content = styled.main`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 10px;
	margin-bottom: 38px;
	height: 100%;
`;

export const Footer = styled.footer`
	display: flex;
	position: fixed;
	justify-content: space-between;
	align-items: center;
	bottom: 0;
	padding: 10px 15px;
	width: 100%;
	background-color: var(--grey-background-1);
	color: var(--grey-background-4);
	border-top: 1px solid var(--grey-border);
	font-size: 0.7rem;

	& span {
		border-radius: 3px;
		background-color: var(--grey-background-2);
		color: var(--grey-background-4);
		padding: 2px 3px;
		font-size: 0.7rem;
		margin-left: 2px;
	}
`;
