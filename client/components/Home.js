import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PostContainer from './Post/PostContainer';
import { mapStateToProps, mapDispatchToProps} from '../redux/selectors/home';

export class Home extends Component {
	constructor(props) {
		super(props);

gs
	}

	componentDidMount() {
		const {
			dispatchGetPosts
		} = this.props;

		dispatchGetPosts();
	}

	resolvePosts() {

	}

	render() {
		return (
			<div className="home">
				<div className="notification-container">
					<PostContainer/>
					<PostContainer/>
					<PostContainer/>
					<PostContainer/>
					<PostContainer/>
				</div>
			</div>
		);
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.PropTypes = {
	posts: PropTypes.array,
	dispatchGetPosts: PropTypes.func.isRequired
};