import React, {Component} from 'react';

import ModifyPost from './ModifyPost';
import Post from './Post';

export default class PostContainer extends Component {
	constructor(props) {
		super(props);

		const {
			title,
			description,
			isCreating
		} = this.props;

		this.state = {
			editing: false,
			isCreating: isCreating,
			title: title || 'Gov. Rick Snyder makes appointment to the State Board of Accountancy',
			description: description || 'Gov. Rick Snyder today announced the appointment of Robert (Lee) Clark of Saline to the State Board of Accountancy. Housed within the Michigan Department of Licensing and Regulatory Affairs, the nine-member board oversees licensure and certification requirements for certified public accountants and public accounting firms.'
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

		this.setState({
			editing: true
		});
	}

	handleChange(inputName, event) {
		this.setState({[inputName]: event.target.value});
	}

	render() {
		const { id } = this.props;
		const {
			editing,
			title,
			description
		} = this.state;

		const content = editing ?
			(<ModifyPost handleChange={this.handleChange}
			             title={title} description={description}/>) :
			(
					<Post {...this.props}/>
			);

		return (
			<div className="post card my-4">
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