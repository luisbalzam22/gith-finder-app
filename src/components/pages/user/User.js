import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Spinner from '../../Spinner.js';
import UserRepos from './UserRepos.js';
import GithubContext from '../../../context-reducer/github/GithubContext.js';

const User = ({
	match: {
		params: { login },
	},
}) => {
	const { getUser, user, repos, getUserRepos } = useContext(GithubContext);
	React.useEffect(() => {
		getUser(login);
		//eslint-disable-next-line
	}, []);

	if (!user || user.login !== login) return <Spinner />;

	const {
		name,
		avatar_url,
		location,
		bio,
		blog,
		login: log_in,
		html_url,
		company,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user;

	return (
		<React.Fragment>
			<div className='container my-4'>
				<div className='row'>
					<div className='col-md-6 offset-md-3 card text-center rounded'>
						<div className='d-flex justify-content-between align-items-center p-4'>
							<Link className='btn btn-dark btn-md' to='/'>
								Ir Atr&aacute;s
							</Link>
							<span className='d-flex align-items-center font-weight-bold'>
								Contratable:{' '}
								<i
									className={
										'ml-2 fas fa-2x fa-' +
										(hireable
											? 'check text-success'
											: 'times-circle text-danger')
									}
								></i>
							</span>
						</div>
						<div className='card-header'>
							<h1 className='card-title h2'>
								{name}{' '}
								<span className='d-block h3'>{log_in && `(${log_in})`}</span>
							</h1>
						</div>
						<img className='card-img px-1' src={avatar_url} alt='' />
						<div className='card-body text-md-left'>
							{location && (
								<p>
									<span className='font-weight-bold'>Ubicaci&oacute;n:</span>{' '}
									{location}
								</p>
							)}
							{bio && (
								<p>
									<span className='font-weight-bold'>Bio:</span> {bio}
								</p>
							)}
							{company && (
								<p>
									<span className='font-weight-bold'>
										Compa&ntilde;&iacute;a:
									</span>{' '}
									{company}
								</p>
							)}
							{blog && (
								<p>
									<span className='font-weight-bold'>Sito web:</span>{' '}
									<a href={blog} target='_blank' rel='noopener noreferrer'>
										{blog}
									</a>
								</p>
							)}

							<ul className='px-0 pt-3'>
								<li className='mb-2 ml-md-0 mx-2  badge badge-pill badge-success'>
									Seguidores: {followers}
								</li>
								<li className='mb-2 ml-md-0 mx-2  badge badge-pill badge-dark'>
									Siguiendo: {following}
								</li>
								<li className='mb-2 ml-md-0 mx-2  badge badge-pill badge-primary'>
									Repos P&uacute;blicos: {public_repos}
								</li>
								<li className='mb-2 ml-md-0 mx-2  badge badge-pill badge-info'>
									Gists P&uacute;blicos: {public_gists}
								</li>
							</ul>
							<UserRepos
								repos={repos}
								getUserRepos={getUserRepos}
								login={login}
							/>
							<a
								className='btn btn-outline-dark btn-block mx-auto w-75'
								href={html_url}
								target='_blank'
								rel='noopener noreferrer'
							>
								Visitar Perfil de GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
export default withRouter(User);
