import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { mapDispatchToProps } from '../redux/selectors/home';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { dispatchLogin } = this.props;
		dispatchLogin('annie@gmail.com', 'password');
	}

	render() {
		return (
			<div className="home">
				Home!
			</div>
		);
	}
};

Home.PropTypes = {
	dispatchLogin: PropTypes.func.isRequired
};

export default connect(()=> ({}), mapDispatchToProps)(Home);