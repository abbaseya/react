import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {Link} from 'react-router';

import {createPost} from '../actions/index';

function validate(values) {
	const errors = {};
	if (!values.title) {
		errors.title = 'Please enter a title';
	}
	if (!values.categories) {
		errors.categories = 'Please enter comma-separated categories';
	}
	if (!values.content) {
		errors.content = 'Please enter some content';
	}
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
	render() {
		const {fields: {title, categories, content}, handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create a new Post</h3>
				<div className="form-group">
					<label>Title</label>
					<input type="text" className={`form-control ${title.touched && title.valid ? 'is-valid' : 'is-invalid'}`} {...title} />
					<div className="invalid-feedback">
						{title.touched ? title.error : ''}
					</div>
				</div>
				<div className="form-group">
					<label>Categories</label>
					<input type="text" className={`form-control ${title.touched && title.valid ? 'is-valid' : 'is-invalid'}`} {...categories} />
					<div className="invalid-feedback">
						{categories.touched ? categories.error : ''}
					</div>
				</div>
				<div className="form-group">
					<label>Content</label>
					<textarea className={`form-control ${title.touched && title.valid ? 'is-valid' : 'is-invalid'}`} {...content} />
					<div className="invalid-feedback">
						{content.touched ? content.error : ''}
					</div>
				</div>
				<button type="submit" className="btn btn-sm btn-dark">Submit</button>
				<Link to="/" className="btn btn-sm btn-danger">Cancel</Link>
			</form>
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: [
		'title',
		'categories',
		'content'
	],
	validate
}, null, {createPost})(PostsNew);
