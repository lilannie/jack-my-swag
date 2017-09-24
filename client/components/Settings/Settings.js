import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import { mapDispatchToProps } from '../../redux/selectors/createUser';

export default class Settings extends Component {
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
			<div className= "settings container bgcolor-4">
				<label className="radio">
					<input id="radio1" type="radio" name="radios" />
						<span className="outer">
							<span className="inner"></span>
						</span>
						Category 1
				</label>
			</div>
		);
	}
}

// CreateUser.PropTypes = {
// 	dispatchCreateUser: PropTypes.func.isRequired
// };
// export default connect(()=> ({}), mapDispatchToProps)(CreateUser);