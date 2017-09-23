import React, {Component} from 'react';

import NotificationContainer from './notifications/NotificationContainer';

export default class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="notification-container">
					<NotificationContainer/>
					<NotificationContainer/>
					<NotificationContainer/>
					<NotificationContainer/>
					<NotificationContainer/>
				</div>
			</div>
		);
	}
};