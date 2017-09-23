import { createActionAsync, createReducerAsync } from 'redux-act-async';

const createPost = params => {
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

	console.dir(options);

	return fetch('http://localhost:3000/api/create-post', options);
};

export const createPostAction =
	createActionAsync('CREATE_POST', createPost);
export const createPostReducer =
	createReducerAsync(createPostAction);