import React, { useReducer } from 'react';
import { SET_INPUT_ALERT, CLEAR_ALERT } from '../types.js';
import AlertContext from './AlertContext.js';
import AlertReducer from './AlertReducer.js';

const AlertState = (props) => {
	const initialState = {
		className: '',
		message: '',
	};

	const [state, dispatch] = useReducer(AlertReducer, initialState);

	const setInputAlert = () => {
		dispatch({ type: SET_INPUT_ALERT });
		window.setTimeout(clearAlert, 4000);
	};
	const clearAlert = () => dispatch({ type: CLEAR_ALERT });

	return (
		<AlertContext.Provider
			value={{
				className: state.className,
				message: state.message,
				setInputAlert,
				clearAlert,
			}}
		>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertState;
