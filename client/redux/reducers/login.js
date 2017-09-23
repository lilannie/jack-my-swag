import { createActionAsync, createReducerAsync } from 'redux-act-async';

const login = (username, password) => {
	let options = {
		method: 'POST',
		body: JSON.stringify({
			username,
			password
		})
	};

	return fetch('http://localhost:3000/api/login', options);
};

export const loginAction = createActionAsync('LOGIN', login, {
	request: {
		callback: (dispatch, getState, ...args) => {
			console.log('LOGIN request callback');
		}
	}
});

export const loginReducer = createReducerAsync(login);