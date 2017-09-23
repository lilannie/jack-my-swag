import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { mapDispatchToProps } from '../../redux/selectors/createUser';

export class CreateUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(inputName, event) {
		this.setState({[inputName]: event.target.value});
	}

	handleSubmit() {
		const { dispatchCreateUser } = this.props,
			{
				username,
				password
			} = this.state;

		dispatchCreateUser(username, password);
	}

	render() {
		return (
			<div className="new-user">
					<h1>New User</h1>
					<input className="user-input" type="text"
					       name="username" value={this.state.username}
					       onChange={this.handleChange.bind(this, ['username'])} />
					<input className="password-input" type="text"
					       name="password" value={this.state.password}
					       onChange={this.handleChange.bind(this, ['password'])} />
					<button className="submit" onClick={this.handleSubmit} >Submit</button>
			</div>
		);
	}
}

CreateUser.PropTypes = {
	dispatchCreateUser: PropTypes.func.isRequired
};

export default connect(()=> ({}), mapDispatchToProps)(CreateUser);