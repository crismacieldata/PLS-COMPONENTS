import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 70px;
	background: var(--bg-gray-100);
	align-items: center;

	> ul {
		display: flex;
		gap: 15px;
		padding: 0 15px;

		> li {
			display: flex;
			justify-content: center;
			color: var(--text-gray-800);
			width: 140px;
			padding: 6px 20px;
			background: var(--bg-gray-400);
			border-radius: 5px;
			font-weight: bold;
		}
	}
`;
