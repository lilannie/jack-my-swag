export const mapStateToProps = state => {
	return {
		user: state.createUserAction ? state.createUserAction.data : state.loginUserAction ? state.loginUserAction.data :null
	};
};