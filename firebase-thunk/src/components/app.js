import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions';
import Contact from './contact';

class App extends Component {
	state = {
		name: '',
		email: ''
	};
	componentWillMount() {
		this.props.fetchContacts();
	}
	onNameChange(e) {
		this.setState({
			name: e.target.value
		});
	}
	onEmailChange(e) {
		this.setState({
			email: e.target.value
		});
	}
	onSubmit(e) {
		e.preventDefault();
		this.props.createContact(this.state);
		this.setState({
			name: '',
			email: ''
		});
	}
	renderContacts() {
		if (!this.props.contacts) {
			return (
				<li className="list-group-item"><i className="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i></li>
			);
		}
		return _.map(this.props.contacts, (contact, key) => {
			return (
				<Contact key={key} uid={key} contact={contact} />
			);
		});
	}
	render() {
		return (
			<div>
				<h3>Create Contact</h3>
				<form className="input-group" onSubmit={this.onSubmit.bind(this)}>
					<span className="input-group-addon">
						<i className="fa fa-user"></i>
					</span>
					<input
						className="form-control"
						placeholder="Enter Contact Name"
						value={this.state.name}
						onChange={this.onNameChange.bind(this)}
						/>
					<span className="input-group-addon">
						<i className="fa fa-envelope"></i>
					</span>
					<input
						className="form-control"
						placeholder="Enter Contact Email"
						value={this.state.email}
						onChange={this.onEmailChange.bind(this)}
						/>
					<span className="input-group-btn">
						<button action="submit" className="btn btn-dark"><i className="fa fa-plus"></i> Add Contact</button>
					</span>
				</form>
				<hr />
				<ul className="list-group">
					{this.renderContacts()}
				</ul>
			</div>
		);
	}
}

function mapState({contacts}){
	return {contacts};
}

export default connect(mapState, actions)(App);
