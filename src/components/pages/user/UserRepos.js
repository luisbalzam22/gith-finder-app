import React from 'react';
import RepoItem from './RepoItem.js';
const UserRepos = ({ login, getUserRepos, repos }) => {
	React.useEffect(() => {
		getUserRepos(login);
		//eslint-disable-next-line
	}, []);
	const reposList = repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);

	return (
		<React.Fragment>
			<h2 className='h4 mb-3'>Algunos repositorios de {login}:</h2>
			<ul className='p-0 text-md-left'>{reposList}</ul>
		</React.Fragment>
	);
};

export default UserRepos;
