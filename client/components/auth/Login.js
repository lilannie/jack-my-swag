import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { mapDispatchToProps } from '../../redux/selectors/login';

export class Login extends Component {
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
		const { dispatchLogin } = this.props,
			{
				username,
				password
			} = this.state;

		dispatchLogin(username, password);
	}

	render() {
		return (
			<div className="background">
				<div className="login">
					<input 	className="user-input" type="text"
					       name="username" placeholder="Username" value={this.state.username}
					       onChange={this.handleChange.bind(this, ['username'])} />
					<input className="password-input" type="password"
					       name="password" placeholder="Password" value={this.state.password}
					       onChange={this.handleChange.bind(this, ['password'])} />
					<button className="submit" onClick={this.handleSubmit} >Submit</button>
					<p> Not Registered? </p>
				</div>
			</div>
		);
	}
}

Login.PropTypes = {
	dispatchLogin: PropTypes.func.isRequired
};

export default connect(()=> ({}), mapDispatchToProps)(Login);