import { createActionAsync, createReducerAsync } from 'redux-act-async';
import database from '../database';

const getPosts = () => {
	return new Promise((resolve, reject) => {
		database.ref('/posts').on('value', (snapshot) => {
			let posts = [];

			snapshot.forEach((data) => {
				const { title, description } = data.val();

				posts.push({
					id: data.key,
					title,
					description
				});

			});
			resolve(posts);

		});
	});
};

export const getPostsAction =
	createActionAsync('GET_POSTS', getPosts);
export const getPostsReducer =
	createReducerAsync(getPostsAction);