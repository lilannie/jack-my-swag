import { createActionAsync, createReducerAsync } from 'redux-act-async';

const createUser = params => {
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

	return fetch('http://localhost:3000/api/create-user', options);
};

export const createUserAction =
	createActionAsync('CREATE_USER', createUser);
export const createUserReducer =
	createReducerAsync(createUserAction);