import React, { useContext } from 'react';
import AlertContext from '../context-reducer/alert/AlertContext.js';

const Alert = (props) => {
	const { className, message } = useContext(AlertContext);
	return <div className={className}>{message}</div>;
};

export default Alert;
