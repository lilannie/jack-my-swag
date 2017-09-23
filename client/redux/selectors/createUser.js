import { createUserAction } from '../reducers/createUser';

export const mapDispatchToProps = dispatch => {
	return {
		dispatchCreateUser: (username, password) => {
			return dispatch(createUserAction({username, password}));
		}
	};
};