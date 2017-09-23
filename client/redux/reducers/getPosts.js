import { createActionAsync, createReducerAsync } from 'redux-act-async';

const createPost = () => {
	return new Promise((resolve, reject) => {
		fetch('http://localhost:3000/api/posts')
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				resolve(responseJson);
			})
			.catch(error => {
				console.log('ERROR - GET /api/posts');
				console.warn(error);
				reject(error);
			});
	});
};

export const getPostsAction =
	createActionAsync('GET_POSTS', createPost);
export const getPostsReducer =
	createReducerAsync(getPostsAction);