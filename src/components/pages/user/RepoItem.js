import React from 'react';

const RepoItem = ({ repo }) => {
	return (
		<a
			className='btn btn-block btn-outline-success h5 py-2 px-3 text-md-left'
			href={repo.html_url}
			target='_blank'
			rel='noopener noreferrer'
		>
			{repo.name}
		</a>
	);
};

export default RepoItem;
