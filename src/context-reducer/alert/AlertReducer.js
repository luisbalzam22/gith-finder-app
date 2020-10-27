import { SET_INPUT_ALERT, CLEAR_ALERT } from '../types.js';
const AlertReducer = (state, action) => {
	const alertClass = 'alert alert-';
	switch (action.type) {
		case SET_INPUT_ALERT:
			return {
				className: alertClass + 'warning',
				message:
					'Por favor, asegúrese de escribir algún nombre o caracter en la barra de búsqueda.',
			};
		case CLEAR_ALERT:
			return {
				className: '',
				message: '',
			};
		default:
			return state;
	}
};

export default AlertReducer;
