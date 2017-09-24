import React, { Component }from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Main';
import Login from '../components/auth/Login';
import CreateUser from '../components/auth/CreateUser';

export default class App extends Component {
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



