import React, {Component} from 'react';

export default class Post extends Component {
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