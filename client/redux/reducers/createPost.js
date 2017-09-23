import { createActionAsync, createReducerAsync } from 'redux-act-async';

const createPost = params => {
	return new Promise((resolve, reject) => {
		const { title, description } = params;

		let options = {
			method: 'POST',
			body: JSON.stringify({
				title,
				description
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		};

		fetch('http://localhost:3000/api/post', options)
			.then((response) => response.json())
			.then((responseJson) => {
				resolve(responseJson);
			})
			.catch(error => {
				console.log('ERROR - POST /api/post');
				console.warn(error);
				reject(error);
			});
	});
};

export const createPostAction =
	createActionAsync('CREATE_POST', createPost);
export const createPostReducer =
	createReducerAsync(createPostAction);