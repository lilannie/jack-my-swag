import { getPostsAction } from '../reducers/getPosts';

export const mapStateToProps = state => {
	return {
		isFetching: state.getPostsReducer.loading,
		posts: state.getPostsReducer.data
	};
};

export const mapDispatchToProps = dispatch => {
	return {
		dispatchGetPosts: () => {
			return dispatch(getPostsAction());
		}
	};
};