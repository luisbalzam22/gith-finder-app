import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import GithubState from './context-reducer/github/GithubState.js';
import AlertState from './context-reducer/alert/AlertState.js';
import Home from './components/pages/home/Home.js';
import NotFound from './components/pages/NotFound.js';
import User from './components/pages/user/User.js';
import Navbar from './components/Navbar.js';
import Alert from './components/Alert.js';

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className='App'>
						<Navbar />
						<Alert />
						<Switch>
							<Route exact path='/'>
								<Home />
							</Route>

							<Route exact path='/user/:login'>
								<User />
							</Route>
							<Route>
								<NotFound />
							</Route>
						</Switch>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
