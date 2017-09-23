import React, {Component} from 'react';

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<nav className="navbar fixed-top">
					<div className="container-fluid">
						<h1 className="text-center">Pulse</h1>
					</div>
				</nav>
			</div>
		);
	}
}