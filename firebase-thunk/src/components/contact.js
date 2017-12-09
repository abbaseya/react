import React, {Component} from 'react';
import {connect} from 'react-redux';

import {deleteContact} from '../actions/index';

class Contact extends Component {
	constructor(props) {
		super(props);
	}
	onDelete() {
		this.props.deleteContact(this.props.uid);
	}
	render() {
		return (
			<li key={this.props.uid} className="list-group-item">
				{this.props.contact.name} <em className="text-primary">{this.props.contact.email}</em> <button className="btn btn-xs btn-danger pull-right" onClick={this.onDelete.bind(this)}><i className="fa fa-remove"></i></button>
			</li>
		);
	}
}

export default connect(null, {deleteContact})(Contact);