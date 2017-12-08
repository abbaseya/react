import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {fetchPosts} from '../actions/index';

class PostsIndex extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}
	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={`post-${post._id['$id']}`}>
					<Link to={`/posts/${post._id['$id']}`}>
						<strong>{post.title}</strong>
					</Link>
					<span className="float-right">{post.categories}</span>
				</li>
			);
		});
	}
	render() {
		return (
			<div>
				<div className="float-right">
					<Link to="/posts/new" className="btn btn-sm btn-dark">
						<i className="fa fa-plus"></i> New Post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapState(state) {
	return {
		posts: state.posts.all
	};
}

export default connect(mapState, {fetchPosts})(PostsIndex);
