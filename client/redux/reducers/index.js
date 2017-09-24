import { combineReducers } from 'redux';

import { loginReducer } from './login';
import { createUserReducer } from './createUser';
import { createPostReducer } from './createPost';
import { getPostsReducer } from './getPosts';
import { notify } from './notify';

const reducers = combineReducers({
	loginReducer,
	createUserReducer,
	createPostReducer,
	getPostsReducer,
	notify
});

export default reducers;
