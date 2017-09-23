import { createActionAsync, createReducerAsync } from 'redux-act-async';

const createUser = (username, password) => {
	let options = {
		method: 'POST',
		body: JSON.stringify({
			username,
			password
		})
	};

	return fetch('http://localhost:3000/api/createUser', options);

};
export const createUserAction = createActionAsync('CREATE_USER', createUser, {
	request: {
		callback: (dispatch, getState, ...args) => {
			console.log('CREATE_USER request callback');
		}
	}
});

export const createUserReducer = createReducerAsync(createUserAction);