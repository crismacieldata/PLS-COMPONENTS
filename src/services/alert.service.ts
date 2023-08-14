import Swal from 'sweetalert2';

const AlertService = {
	alert: (title: string, callbackConfirmed?: any) => {
		Swal.fire({
			icon: 'info',
			title,
			allowOutsideClick: false,
			customClass: {
				confirmButton: 'modal-primary-button',
				denyButton: 'modal-secondary-button',
				title: 'modal-title'
			}
		}).then((result: any) => {
			if (result.isConfirmed && callbackConfirmed) {
				callbackConfirmed();
			}
		});
	},
	success: (title: string, callbackConfirmed?: any) => {
		Swal.fire({
			icon: 'success',
			title,
			allowOutsideClick: false,
			customClass: {
				confirmButton: 'modal-primary-button',
				denyButton: 'modal-secondary-button',
				title: 'modal-title'
			}
		}).then((result: any) => {
			if (result.isConfirmed && callbackConfirmed) {
				callbackConfirmed();
			}
		});
	},
	confirm: (title: string, callbackConfirmed: any, callbackNotConfirmed?: any) => {
		Swal.fire({
			title,
			showDenyButton: true,
			confirmButtonText: 'Sim',
			denyButtonText: 'Não',
			allowOutsideClick: false,
			customClass: {
				confirmButton: 'modal-primary-button',
				denyButton: 'modal-secondary-button',
				title: 'modal-title'
			}
		}).then((result: any) => {
			if (result.isConfirmed) {
				callbackConfirmed();
			} else if (callbackNotConfirmed) {
				callbackNotConfirmed();
			}
		});
	},
	custom: (content: any, callbackConfirmed: any, callbackNotConfirmed?: any) => {
		Swal.fire({
			html: content,
			showDenyButton: true,
			confirmButtonText: 'Sim',
			denyButtonText: 'Não',
			allowOutsideClick: false,
			customClass: {
				confirmButton: 'modal-primary-button',
				denyButton: 'modal-secondary-button',
				title: 'modal-title'
			}
		}).then((result: any) => {
			if (result.isConfirmed) {
				callbackConfirmed();
			} else if (callbackNotConfirmed) {
				callbackNotConfirmed();
			}
		});
	}
};

export default AlertService;
