import { createContext, useEffect, useState } from 'react';
import { Container } from './style';
import { useKey, useWindowScroll } from 'react-use';

type ModalContextType = {
	close: () => void;
	open: (modalName: string) => void;
	addModal: (modalName: string, content: any) => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

const modals: any = [];

const ModalProvider = ({ children }: any) => {
	const [modal, setModal] = useState<any>();
	const [opened, setOpened] = useState<boolean>(false);
	const { y } = useWindowScroll();

	useKey('Escape', () => {
		if (opened) close();
	});

	useEffect(() => {
		if (opened) document.body.classList.add('modal-open');
		else document.body.classList.remove('modal-open');
		return () => {
			document.body.classList.remove('modal-open');
		};
	}, [opened]);

	const addModal = (modalName: string, content: any) => {
		modals.push({ modalName, content });
	};

	const open = (modalName: string) => {
		const foundModal = modals.find((m: any) => m.modalName === modalName);
		if (foundModal) {
			setModal(foundModal.content);
			setOpened(true);
		} else {
			console.log('Modal não encontrado', modalName);
		}
	};

	const close = () => {
		setOpened(false);
		setModal(null);
	};

	return (
		<ModalContext.Provider value={{ addModal, open, close }}>
			<Container>
				{opened && modal && (
					<div style={{ top: `${y}px` }} id="modal-over" className="modal-overlay shadow-gray">
						{modal}
					</div>
				)}
				{children}
			</Container>
		</ModalContext.Provider>
	);
};

export default ModalProvider;
