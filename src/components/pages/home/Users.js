import React, { useContext } from 'react';
import UserItem from './UserItem.js';
import Spinner from '../../Spinner.js';
import GithubContext from '../../../context-reducer/github/GithubContext.js';

const Users = (props) => {
	let { loading, users: loadedUsers } = useContext(GithubContext);
	let users = loadedUsers.map((user) => (
		<UserItem key={user.node_id} user={user} />
	));

	if (loading) {
		return <Spinner />;
	}

	return (
		<div className='container my-4'>
			<div className='row'>{users}</div>
		</div>
	);
};

export default Users;
