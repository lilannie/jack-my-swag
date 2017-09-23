import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PostContainer from './Post/PostContainer';
import { mapStateToProps, mapDispatchToProps} from '../redux/selectors/home';

export class Home extends Component {
	constructor(props) {
		super(props);

		this.resolvePosts = this.resolvePosts.bind(this);
	}

	componentDidMount() {
		const {
			dispatchGetPosts
		} = this.props;

		dispatchGetPosts();
	}

	resolvePosts() {
		const {
			posts
		} = this.props;

		let postComponents = [];
		if (posts != undefined){
			posts.foreach(post => {
				postComponents.push(<PostContainer title={post.title} description={post.description}/>)
			});
		}

		return postComponents;
	}

	render() {
		return (
			<div className="home">
				<div className="notification-container">
					{this.resolvePosts()}
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