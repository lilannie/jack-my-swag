import { createActionAsync, createReducerAsync } from 'redux-act-async';

const login = params => {
	return new Promise((resolve, reject) => {
		const { username, password } = params;

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

		fetch('http://localhost:3000/api/login', options)
			.then((response) => response.json())
			.then((responseJson) => {
				resolve(responseJson);
			})
			.catch(error => {
				console.log('ERROR - POST /api/login');
				console.warn(error);
				reject(error);
			});
	});
};

export const loginAction =
	createActionAsync('LOGIN', login);
export const loginReducer =
	createReducerAsync(login);