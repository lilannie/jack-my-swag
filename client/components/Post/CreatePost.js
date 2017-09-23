import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
			<div className="container">
				<h2>Create a Post</h2>
				<input type="text" name="title"
				       value={title} onChange={this.handleChange.bind(this, ['title'])} />
				<input type="text" name="description"
				       value={description} onChange={this.handleChange.bind(this, ['description'])} />
				<button type="submit" onClick={this.handleSubmit}>Submit</button>
			</div>
		);
	}
}

export default connect(()=>({}), mapDispatchToProps)(CreatePost);

CreatePost.PropTypes = {
	diispatchCreatePost: PropTypes.func.isRequired
};