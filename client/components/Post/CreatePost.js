import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FacebookButton, FacebookCount } from "react-social";

import { mapDispatchToProps } from '../../redux/selectors/createPost';
export class CreatePost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			description: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
 
	handleChange(inputName, event) {
		this.setState({[inputName]: event.target.value});
	}

	handleSubmit() {
		const {
			diispatchCreatePost
		} = this.props;

		const {
			title,
			description
		} = this.state;

		diispatchCreatePost(title, description);
	}

	render() {
		const {
			title,
			description
		} = this.state;

		return (
			<div className="background">
				<div className="postBox">
					<h2>Create a Post</h2>
					<input type="text" className="title" placeholder="Title"
					       value={title} onChange={this.handleChange.bind(this, ['title'])} />
					<input type="text" className="description" placeholder="What's happening in your town?"
					       value={description} onChange={this.handleChange.bind(this, ['description'])} />
					<button type="submit" onClick={this.handleSubmit}>Submit</button>
                	<FacebookButton title="Share via Facebook" message={message} appId={1368653369923435	} url={"facebook.com"} element="a" className="">
                    	<i className="fa fa-facebook-square"/>
               		</FacebookButton>
				</div>
			</div>
		);
	}
}

export default connect(()=>({}), mapDispatchToProps)(CreatePost);

CreatePost.PropTypes = {
	diispatchCreatePost: PropTypes.func.isRequired
};