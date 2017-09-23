import { createActionAsync, createReducerAsync } from 'redux-act-async';

const createUser = (username, password) => {
	let body = {
		method: 'POST',
		body: JSON.stringify({
			username,
			password
		})
	};

	fetch('http://localhost:3000/api/createuser', body)
		.then((response) => response.json())
		.then((responseJson) => {
			return responseJson;
		})
		.catch((error) => {
			console.error(error);
		});
};
export const createUserAction = createActionAsync('createUser', createUser, {
	request: {
		callback: (dispatch, getState, ...args) => {
			console.log('request callback');
		}
	}
});

export const createUserReducer = createReducerAsync(createUserAction);