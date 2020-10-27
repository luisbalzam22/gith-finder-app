import React from 'react';
import Searchform from './pages/home/Searchform.js';
import { Link, withRouter } from 'react-router-dom';

const Navbar = ({ location }) => {
	return (
		<div className='bg-dark text-white'>
			<nav className='navbar container'>
				<Link to='/' className='navbar-brand text-white m-auto m-sm-0'>
					<i className='fab fa-github'></i> GitHFinder App
				</Link>
				{location.pathname === '/' && <Searchform />}
			</nav>
		</div>
	);
};

export default withRouter(Navbar);
