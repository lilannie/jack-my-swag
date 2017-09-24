import { createPostAction } from '../reducers/createPost';

export const mapDispatchToProps = dispatch => {
	return {
		diispatchNotify: (title, description) => {
			return dispatch(notifyAction({title, description}));
		}
	};
};