import { createPostAction } from '../reducers/createPost';

export const mapDispatchToProps = dispatch => {
	return {
		diispatchCreatePost: (title, description) => {
			return dispatch(createPostAction({title, description}));
		}
	};
};