import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Modal, Button} from 'react-bootstrap';
import * as EmailValidator from 'email-validator';

import * as actions from '../actions';
import Contact from './contact';

class App extends Component {
	state = {
		name: '',
		email: '',
		modal: {
			show: false,
			title: '',
			content: ''
		}
	};
	componentWillMount() {
		this.props.fetchContacts();
	}
	closeModal() {
    this.setState({
    	modal: {
    		show: false,
				content: ''
    	}
    });
  }
  openModal(conetnt) {
    this.setState({
    	modal: {
    		show: true,
				content: conetnt
    	}
    });
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
		const errors = this.validate();
		if (errors != '') {
			this.openModal(errors.join('<br />'));
		} else {
			const contact = this.state;
			delete contact.modal;
			this.props.createContact(contact);
			this.setState({
				name: '',
				email: '',
				modal: {
					show: false,
					content: ''
				}
			});
		}
	}
	validate() {
		let errors = [];
		if (this.state.name == '') {
			errors.push('Please enter valid contant name');
		}
		if (this.state.email == '' || !EmailValidator.validate(this.state.email)) {
			errors.push('Please enter valid contant email');
		}
		return errors;
	}
	renderContacts() {
		if (this.props.contacts.length == 0) {
			return (
				<li className="list-group-item"><i className="fa fa-circle-o-notch fa-spin fa-fw"></i></li>
			);
		}
		return _.map(this.props.contacts, (contact, key) => {
			return (
				<Contact key={key} uid={key} contact={contact} />
			);
		});
	}
	render() {
		const transitionOpts = {
			transitionName: 'fade',
			transitionEnterTimeout: 500,
			transitionLeaveTimeout: 500,
		};
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
						<button action="submit" className="btn btn-default"><i className="fa fa-plus"></i> Add Contact</button>
					</span>
				</form>
				<hr />
				<ul className="list-group">
					<ReactCSSTransitionGroup {...transitionOpts}>
						{this.renderContacts()}
					</ReactCSSTransitionGroup>
				</ul>
				<Modal show={this.state.modal.show} onHide={this.closeModal.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title><i className="fa fa-exclamation-triangle"></i> Caution</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p dangerouslySetInnerHTML={{__html: this.state.modal.content}}></p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal.bind(this)}><i className="fa fa-remove"></i> Close</Button>
          </Modal.Footer>
        </Modal>
			</div>
		);
	}
}

function mapState({contacts}){
	return {contacts};
}

export default connect(mapState, actions)(App);
