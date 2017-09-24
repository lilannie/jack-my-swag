import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { mapDispatchToProps } from '../../redux/selectors/createUser';

export class CreateUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			phoneNumber: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.isActiveLabel = this.isActiveLabel.bind(this);
	}

	handleChange(inputName, event) {
		this.setState({[inputName]: event.target.value});
	}

	handleSubmit() {
		const { dispatchCreateUser } = this.props,
			{
				username,
				password,
				phoneNumber
			} = this.state;

		dispatchCreateUser(username, password, phoneNumber);
	}

	isActiveLabel(element){
		return 'input__label input__label--ruri '+((this.state[element].length > 0) ?'active':'');
	}

	render() {
		const {
			username,
			password,
			phoneNumber
		} = this.state;

		return (
			<div className= "background col-md-6">
				<div className="new-user bgcolor-4">
					<h1>New User</h1>

					<span className="input input--ruri">
						<input className="input__field input__field--ruri" type="text" id="input-26"
						       name="username" value={username}
						       onChange={this.handleChange.bind(this, ['username'])}/>
						<label className={this.isActiveLabel('username')} htmlFor="input-26">
							<span className="input__label-content input__label-content--ruri">Username</span>
						</label>
					</span>

					<span className="input input--ruri">
						<input className="input__field input__field--ruri" type="password" id="input-27"
						       name="password" value={password}
						       onChange={this.handleChange.bind(this, ['password'])} />
						<label className={this.isActiveLabel('password')}  htmlFor="input-27">
							<span className="input__label-content input__label-content--ruri">Password</span>
						</label>
					</span>

					<span className="input input--ruri">
						<input className="input__field input__field--ruri" type="phoneNumber" id="input-28"
						       name="text" value={phoneNumber}
						       onChange={this.handleChange.bind(this, ['phoneNumber'])} />
						<label className={this.isActiveLabel('phoneNumber')}  htmlFor="input-28">
							<span className="input__label-content input__label-content--ruri">Phone Number</span>
						</label>
					</span>

					<Link to="/">
						<button className="submit" onClick={this.handleSubmit}>Create User</button>
					</Link>
				</div>
			</div>
		);
	}
}

CreateUser.PropTypes = {
	dispatchCreateUser: PropTypes.func.isRequired
};

export default connect(()=> ({}), mapDispatchToProps)(CreateUser);