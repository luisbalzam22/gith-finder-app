import React, { useState, useContext } from 'react';
import GithubContext from '../../../context-reducer/github/GithubContext.js';
import AlertContext from '../../../context-reducer/alert/AlertContext.js';

const Searchform = () => {
	const [textinput, setTextinput] = useState('');
	const { searchUsers, clearUsers, users } = useContext(GithubContext);
	const { setInputAlert } = useContext(AlertContext);

	const onChange = (e) => {
		setTextinput(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (/\w/i.test(textinput)) {
			searchUsers(textinput);
			setTextinput('');
			return;
		}
		setInputAlert();
	};

	const onClick = (e) => {
		e.preventDefault();
		clearUsers();
	};

	return (
		<form className='form-inline m-auto m-sm-0' onSubmit={onSubmit}>
			<div className='d-flex flex-wrap justify-content-center'>
				<input
					name='textinput'
					type='text'
					placeholder='Buscar usuarios...'
					className='rounded d-inline w-auto'
					value={textinput}
					onChange={onChange}
				/>
				<button
					type='submit'
					className='fa fa-search ml-3 rounded py-1'
				></button>
				{Boolean(users.length) && (
					<button
						className='ml-sm-3 rounded btn btn-danger font-weight-bold btn-sm'
						onClick={onClick}
					>
						Limpiar lista
					</button>
				)}
			</div>
		</form>
	);
};

export default Searchform;
