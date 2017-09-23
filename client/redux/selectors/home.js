import { getPostsAction } from '../reducers/getPosts';

export const mapStateToProps = state => {
	return {
		posts: state.data
	};
};

export const mapDispatchToProps = dispatch => {
	return {
		dispatchGetPosts: () => {
			return dispatch(getPostsAction());
		}
	};
};