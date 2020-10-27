import React, { useReducer } from 'react';
import axios from 'axios';
import {
	SEARCH_USERS,
	SET_LOADING,
	END_LOADING,
	CLEAR_USERS,
	GET_USER,
	GET_USER_REPOS,
} from '../types.js';
import GithubContext from './GithubContext.js';
import GithubReducer from './GithubReducer.js';

const GithubState = (props) => {
	const initialState = {
		users: [],
		user: null,
		repos: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState); //the "dispatch" function will just call "GithubReducer" function and pass to it the argument it was called with

	const searchUsers = async (text) => {
		if (text) {
			setLoading();

			const {
				data: { items },
			} = await axios.get(`https://api.github.com/search/users?q=${text}`);

			dispatch({
				type: SEARCH_USERS,
				payload: items,
			});
			endLoading();
		}
	};

	const clearUsers = () => dispatch({ type: CLEAR_USERS });

	const setLoading = () => dispatch({ type: SET_LOADING });

	const endLoading = () => dispatch({ type: END_LOADING });

	const getUser = async (login) => {
		setLoading();
		const { data } = await axios.get(`https://api.github.com/users/${login}`);

		dispatch({ type: GET_USER, payload: data });
		endLoading();
	};

	const getUserRepos = async (login) => {
		const { data } = await axios.get(
			`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc`
		);
		dispatch({ type: GET_USER_REPOS, payload: data });
		endLoading();
	};

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				searchUsers,
				getUser,
				getUserRepos,
				clearUsers,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
