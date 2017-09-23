import React, {Component} from 'react';

import ModifyNotification from 'ModifyNotification';
import Notification from 'Notification';

export default class NotificationContainer extends Component {
	constructor(props) {
		super(props);

		const {
			title,
			description
		} = this.props;

		this.state = {
			editing: false,
			title,
			description
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleClick(id) {
		console.log('handleClick id: '+id);
	}

	handleEdit(id) {
		console.log('handleEdit id: '+id);
	}

	handleChange(inputName, event) {
		this.setState({[inputName]: event.target.value});
	}

	render() {
		const {
			editing,
			title,
			description
		} = this.state;

		const content = editing ?
			(<ModifyNotification handleChange={this.handleChange}
			                     title={title} description={description}/>) :
			(<Notification {...this.props}/>);

		return (
			<div className="notification card my-4" onClick={this.handleClick.bind(null, id)}>
				{content}
			</div>
		);
	}
}

Notification.defaultProps = {
	id: 0,
	title: 'Gov. Rick Snyder makes appointment to the State Board of Accountancy',
	description: 'Gov. Rick Snyder today announced the appointment of Robert (Lee) Clark of Saline to the State Board of Accountancy. Housed within the Michigan Department of Licensing and Regulatory Affairs, the nine-member board oversees licensure and certification requirements for certified public accountants and public accounting firms.'
};