import React, {Component} from 'react';

export default class ModifyNotification extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			title,
			description,
			handleChange
		} = this.props;

		return (
			<div className="body container">
				<h6>Title</h6>
				<input className="title-input" type="text"
				       name="title" value={title}
				       onChange={handleChange.bind(this, ['title'])} />
				<h6>Description</h6>
				<input className="description-input" type="text"
				       name="description" value={description}
				       onChange={handleChange.bind(this, ['description'])} />
			</div>
		);
	}
}