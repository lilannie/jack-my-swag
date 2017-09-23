import React, {Component} from 'react';

export default class Notification extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			title,
			description
		} = this.props;

		return (
			<div className="body container">
				<h4 className="display-5 text-center">{title}</h4>
				<p className="lead">{description}</p>
			</div>
		);
	}
}