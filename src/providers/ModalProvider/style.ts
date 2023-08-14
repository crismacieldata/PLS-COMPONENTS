import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	height: 100vh;

	> .modal-overlay {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30px;
		z-index: 999;
		background: rgba(0, 0, 0, 0.75);
		height: 100vh;
	}
`;
Container.displayName = 'Container';
