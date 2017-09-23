import { createActionAsync, createReducerAsync } from 'redux-act-async';

const login = (username, password) => {
	let body = {
		method: 'POST',
		body: JSON.stringify({
			username,
			password
		})
	};

	fetch('http://localhost:3000/api/login', body)
		.then(response => response.json())
		.then((responseJson) => {
			return responseJson;
		})
		.catch((error) => {
			console.error(error);
		});
};
export const loginAction = createActionAsync('LOGIN', login, {
	request: {
		callback: (dispatch, getState, ...args) => {
			console.log('request callback');
		}
	}
});

export const loginReducer = createReducerAsync(login);