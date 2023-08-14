import { useEffect } from 'react';
import { Container } from './style';
import { useModalContext } from '../../hooks/useModal';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface ModalPropsInterface {
	name: string;
	title: string;
	children: any;
	height?: string;
}

const Modal = ({ name, title, children, height = '100%' }: ModalPropsInterface) => {
	const modalContext = useModalContext();

	useEffect(() => {
		modalContext.addModal(
			name,
			<Container>
				<div className="modal-box">
					<div className="modal-header">
						<h4>{title}</h4>
						<a onClick={modalContext.close}>
							<AiOutlineCloseCircle />
						</a>
					</div>
					<div style={{ height }} className="modal-content">
						{children}
					</div>
				</div>
			</Container>
		);
	}, [name]);

	return <></>;
};

export default Modal;
