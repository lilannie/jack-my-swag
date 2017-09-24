import React, {Component} from 'react';

export default class Post extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {

	}

	render() {
		const {
			id,
			title,
			description
		} = this.props;

		return (
				<div className="body container">
					<h4 className="display-5 text-center">{title}</h4>
					<p className="lead">{description}</p>
					<button onClick={this.handleClick} className="notify">Notify Constituents</button>
				</div>
		);
	}
}
