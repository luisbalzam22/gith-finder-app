import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='fixed-center'>
			<h1 className='h2'>No Encontrado :(</h1>
			<p className='font-weight-bold'>
				La p&aacute;gina que est&aacute;s buscando no ex&iacute;ste
			</p>
			<Link to='/' className='btn btn-md btn-outline-dark font-weight-bold'>
				Ir atr&aacute;s
			</Link>
		</div>
	);
};
export default withRouter(NotFound);
