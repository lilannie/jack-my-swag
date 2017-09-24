import { createActionAsync, createReducerAsync } from 'redux-act-async';
import database from '../database';
const notify = params => {
	return new Promise((resolve, reject) => {
		database.ref('/us')
	});
};

export const notifyAction =
	createActionAsync('NOTIFY', notify);
export const notifyReducer  =
	createReducerAsync(notifyAction);