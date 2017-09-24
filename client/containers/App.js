import React, { Component }from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { mapStateToProps } from '../redux/selectors/app';

import Main from './Main';
import Login from '../components/auth/Login';
import CreateUser from '../components/auth/CreateUser';

export class App extends Component {
	render() {
		return (
			<div className="app">
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/createuser" component={CreateUser} />
					<Route path="/" component={Main} />
				</Switch>
			</div>
		);

	}
}

export default connect(mapStateToProps)(App);

App.PropTypes = {
	user: PropTypes.object,
	isloading: PropTypes.bool
};


