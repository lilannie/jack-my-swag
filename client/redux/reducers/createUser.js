import { createActionAsync, createReducerAsync } from 'redux-act-async';

const createUser = params => {
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

		console.dir(options);

		fetch('http://localhost:3000/api/user', options)
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				resolve(responseJson);
			})
			.catch(error => {
				console.log('ERROR - POST /api/user');
				console.warn(error);
				reject(error);
			});
	});
};

export const createUserAction =
	createActionAsync('CREATE_USER', createUser);
export const createUserReducer =
	createReducerAsync(createUserAction);