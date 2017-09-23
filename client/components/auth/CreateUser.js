import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { mapDispatchToProps } from '../../redux/selectors/createUser';

export class CreateUser extends Component {
	componentDidMount() {
		const { dispatchCreateUser } = this.props;
		dispatchCreateUser('annie@gmail.com', 'password');
	}

	render() {
		return (
			<div className="new-user">
				New User!
			</div>
		);
	}
}

CreateUser.PropTypes = {
	dispatchCreateUser: PropTypes.func.isRequired
};

export default connect(()=> ({}), mapDispatchToProps)(CreateUser);