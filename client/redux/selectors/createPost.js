import { createPostAction } from '../reducers/createPost';

export const mapDispatchToProps = dispatch => {
	return {
		diispatchCreatePost: (title, description, category) => {
			return dispatch(createPostAction({title, description, category}));
		}
	};
};