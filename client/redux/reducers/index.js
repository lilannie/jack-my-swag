import { combineReducers } from 'redux';

import { loginReducer } from "./login";
import { createUserReducer } from "./createUser";

const reducers = combineReducers({
	loginReducer,
	createUserReducer
});

export default reducers;
