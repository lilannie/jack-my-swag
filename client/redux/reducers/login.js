import { createActionAsync, createReducerAsync } from 'redux-act-async';

const login = (username, password) => {
	let options = {
		method: 'POST',
		body: JSON.stringify({
			username,
			password
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	};

	return fetch('http://localhost:3000/api/login', options);
};

export const loginAction =
	createActionAsync('LOGIN', login);
export const loginReducer =
	createReducerAsync(login);