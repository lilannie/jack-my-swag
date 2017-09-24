import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

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
		this.isActiveLabel = this.isActiveLabel.bind(this);
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

	isActiveLabel(element){
		return 'input__label input__label--ruri '+((this.state[element].length > 0) ?'active':'');
	}

	render() {
		const {
			title,
			description
		} = this.state;

		return (
			<div className="background col-md-6">
				<div className="postBox bgcolor-4">
					<h2>Create a Post</h2>

					<span className="input input--ruri">
						<input className="input__field input__field--ruri" type="text" id="input-26"
						       name="title" value={title} onChange={this.handleChange.bind(this, ['title'])} />
						<label className={this.isActiveLabel('title')} htmlFor="input-26">
							<span className="input__label-content input__label-content--ruri">Title</span>
						</label>
					</span>

					<span className="input input--ruri">
						<input className="input__field input__field--ruri" type="text" id="input-27"
						       name="description" value={description} onChange={this.handleChange.bind(this, ['description'])} />
						<label className={this.isActiveLabel('description')}  htmlFor="input-27">
							<span className="input__label-content input__label-content--ruri">Description</span>
						</label>
					</span>

					<Link to="/">
						<button className="submit" onClick={this.handleSubmit}>Submit</button>
					</Link>

				</div>
			</div>
		);
	}
}

export default connect(()=>({}), mapDispatchToProps)(CreatePost);

CreatePost.PropTypes = {
	diispatchCreatePost: PropTypes.func.isRequired
};