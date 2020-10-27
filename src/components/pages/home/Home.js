import React, { useContext } from 'react';
import Users from './Users.js';
import GithubContext from '../../../context-reducer/github/GithubContext.js';

const Home = (props) => {
	const { users, loading } = useContext(GithubContext);
	return (
		<React.Fragment>
			{!Boolean(users.length) && !loading && (
				<div className='fixed-center text-white'>
					<h1 className='my-3 text-center'>Bienvenido a "GitHFinderApp"</h1>
					<p className='font-weight-bold text-center'>
						Escr&iacute;be un nombre en la barra de b&uacute;squeda para
						encontrar usuarios.
					</p>
				</div>
			)}
			<Users />
		</React.Fragment>
	);
};

export default Home;
