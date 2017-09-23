import React, {Component} from 'react';

export default class Notification extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(id) {
		console.log('handleClick id: '+id);
	}

	render() {
		const {
			id,
			title,
			description
		} = this.props;

		return (
			<div className="notification card my-4" onClick={this.handleClick.bind(null, id)}>
				<div className="body container">
					<h4 className="display-6 text-center">{title}</h4>
					<p className="lead">{description}</p>
				</div>
			</div>
		);
	}
}

Notification.defaultProps = {
	id: 0,
	title: 'A Warm Welcome!',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.'
};