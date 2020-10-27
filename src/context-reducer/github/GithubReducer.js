import {
	SEARCH_USERS,
	CLEAR_USERS,
	SET_LOADING,
	END_LOADING,
	GET_USER,
	GET_USER_REPOS,
} from '../types.js';
const GithubReducer = (state, action) => {
	switch (action.type) {
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
			};

		case CLEAR_USERS:
			return {
				...state,
				users: [],
			};

		case SET_LOADING:
			return {
				...state,
				loading: true,
			};

		case END_LOADING:
			return {
				...state,
				loading: false,
			};
		case GET_USER:
			return {
				...state,
				user: action.payload,
			};
		case GET_USER_REPOS:
			return {
				...state,
				repos: action.payload,
			};
		default:
			return state;
	}
};

export default GithubReducer;
