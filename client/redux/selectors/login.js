import { loginAction } from '../reducers/login';

export const mapDispatchToProps = dispatch => {
	return {
		dispatchLogin: (username, password) => {
			return dispatch(loginAction({username, password}));
		}
	};
};