import { useContext } from 'react';
import { ModalContext } from '../providers/ModalProvider/Modal.provider';

export const useModalContext = () => {
	return useContext<any>(ModalContext);
};
