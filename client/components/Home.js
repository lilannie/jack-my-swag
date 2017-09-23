import React, {Component} from 'react';

import Notification from './notifications/Notification';

export default class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="notification-container">

					<Notification/>
					<Notification/>
				</div>
			</div>
		);
	}
};