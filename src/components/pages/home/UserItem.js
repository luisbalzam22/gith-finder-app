import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, login } }) => {
	return (
		<div className='col-sm-3'>
			<div className='card p-2 mb-4 mx-auto text-center align-items-center'>
				<img className='card-img-top rounded-circle' src={avatar_url} alt='' />
				<h4 className='card-title h6'>{login}</h4>
				<Link to={`/user/${login}`} className='btn btn-sm btn-dark text-white'>
					Visitar Perfil
				</Link>
			</div>
		</div>
	);
};

export default UserItem;
