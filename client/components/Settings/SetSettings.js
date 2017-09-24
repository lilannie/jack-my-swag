import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import { mapDispatchToProps } from '../../redux/selectors/createUser';

export class SetSettings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(inputName, event) {
		this.setState({[inputName]: event.target.value});
	}


	render() {
		return (
			<div className= "container bgcolor-4">


			</div>
		);
	}
}

// CreateUser.PropTypes = {
// 	dispatchCreateUser: PropTypes.func.isRequired
// };
// export default connect(()=> ({}), mapDispatchToProps)(CreateUser);