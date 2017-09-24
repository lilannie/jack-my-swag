import { createUserAction } from '../reducers/createUser';

export const mapDispatchToProps = dispatch => {
	return {
		dispatchCreateUser: (username, password, phoneNumber) => {
			return dispatch(createUserAction({username, password, phoneNumber}));
		}
	};
};