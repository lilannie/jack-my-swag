import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

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
		this.isActiveLabel = this.isActiveLabel.bind(this);
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

	isActiveLabel(element){
		return 'input__label input__label--ruri '+((this.state[element].length > 0) ?'active':'');
	}

	render() {
		return (
			<div className="background col-md-6">
				<div className="login bgcolor-4">
					<h1>Welcome to Pulse</h1>
					<h6>Please Login</h6>

					<span className="input input--ruri">
						<input className="input__field input__field--ruri" type="text" id="input-26"
						       name="username" value={this.state.username}
						       onChange={this.handleChange.bind(this, ['username'])}/>
						<label className={this.isActiveLabel('username')} htmlFor="input-26">
							<span className="input__label-content input__label-content--ruri">Username</span>
						</label>
					</span>

					<span className="input input--ruri">
						<input className="input__field input__field--ruri" type="password" id="input-27"
						       name="password" value={this.state.password}
						       onChange={this.handleChange.bind(this, ['password'])} />
						<label className={this.isActiveLabel('password')}  htmlFor="input-27">
							<span className="input__label-content input__label-content--ruri">Password</span>
						</label>
					</span>

					<button className="submit" onClick={this.handleSubmit} href="/">Login</button>

					<div className="row sub-title">
						<Link to="createuser"> Not Registered? </Link>
					</div>
				</div>
			</div>
		);
	}
}

Login.PropTypes = {
	dispatchLogin: PropTypes.func.isRequired
};

Login.contextTypes = {
	router: React.PropTypes.shape({
		history: React.PropTypes.object.isRequired,
	}),
};

export default connect(()=> ({}), mapDispatchToProps)(Login);