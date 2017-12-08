import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {Link} from 'react-router';

import {createPost} from '../actions/index';

const FIELDS = {
	title: {
		type: 'input',
		subtype: 'text',
		label: 'Title',
		helper: 'Please enter a title'
	},
	categories: {
		type: 'input',
		subtype: 'text',
		label: 'Categories',
		helper: 'Please enter comma-separated categories'
	},
	content: {
		type: 'textarea',
		label: 'Content',
		helper: 'Please enter some content'
	}
};

function validate(values) {
	const errors = {};
	_.each(FIELDS, (config, field) => {
		if (!values[field]) {
			errors[field] = config.helper;
		}
	});
	return errors;
}

class PostsNew extends Component {
	static contextTypes = {
		router: PropTypes.object
	};
	onSubmit(props) {
		this.props.createPost(props).then(() => {
			this.context.router.push('/');
		}).catch(() => {
			// TODO: handle error response
		});
	}
	renderField(config, field) {
		const helper = this.props.fields[field];
		return (
			<div key={config.label} className="form-group">
				<label>{config.label}</label>
				<config.type type={config.subtype} className={`form-control ${helper.touched && helper.valid ? 'is-valid' : 'is-invalid'}`} {...helper} />
				<div className="invalid-feedback">
					{helper.touched ? helper.error : ''}
				</div>
			</div>
		);
	}
	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create a new Post</h3>
				{_.map(FIELDS, this.renderField.bind(this))}
				<button type="submit" className="btn btn-sm btn-dark">Submit</button>
				<Link to="/" className="btn btn-sm btn-danger">Cancel</Link>
			</form>
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: _.keys(FIELDS),
	validate
}, null, {createPost})(PostsNew);
