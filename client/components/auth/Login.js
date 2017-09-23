import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { mapDispatchToProps } from '../../redux/selectors/login';

export class Login extends Component {
	componentDidMount() {
		const { dispatchLogin } = this.props;
		dispatchLogin('annie@gmail.com', 'password');
	}

  render() {
    return (
      <div className="login">
	      Login!
      </div>
    );
  }
}

Login.PropTypes = {
	dispatchLogin: PropTypes.func.isRequired
};

export default connect(()=> ({}), mapDispatchToProps)(Login);