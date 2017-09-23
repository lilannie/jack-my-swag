import { combineReducers } from 'redux';

import { loginReducer } from './login';
import { createUserReducer } from './createUser';
import { createPostReducer } from './createPost';
import { getPostsReducer } from './getPosts';

const reducers = combineReducers({
	loginReducer,
	createUserReducer,
	createPostReducer,
	getPostsReducer
});

export default reducers;
