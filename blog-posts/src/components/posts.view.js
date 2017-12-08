import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {fetchPost, deletePost} from '../actions/index';

class PostsView extends Component {
	static contextTypes = {
		router: PropTypes.object
	};
	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}
	onDelete() {
		this.props.deletePost(this.props.params.id).then(() => {
			this.context.router.push('/');
		}).catch(() => {
			// TODO: handle error response
		});
	}
	render() {
		const {post} = this.props;
		if (!post) {
			return (
				<div>loading ..</div>
			);
		}
		return (
			<div>
				<Link to="/" className="btn btn-sm btn-dark float-right"><i className="fa fa-angle-left"></i> Back</Link>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
				<button
					onClick={this.onDelete.bind(this)}
					className="btn btn-sm btn-danger">
					<i className="fa fa-remove"></i> Delete
				</button>
			</div>
		);
	}
}

function mapState(state) {
	return {
		post: state.posts.post
	};
}

export default connect(mapState, {fetchPost, deletePost})(PostsView);
