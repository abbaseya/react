import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {fetchPosts} from '../actions/index';

export class PostsIndex extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}
	renderPosts() {
		if (!this.props.posts || this.props.posts.length == 0) {
			return (
				<li className="list-group-item"><i className="fa fa-circle-o-notch fa-spin fa-fw"></i></li>
			);
		}
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
		const transitionOpts = {
			transitionName: 'fade',
			transitionEnterTimeout: 500,
			transitionLeaveTimeout: 500,
		};
		return (
			<div>
				<div className="float-right">
					<Link to="/posts/new" className="btn btn-sm btn-dark">
						<i className="fa fa-plus"></i> New Post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					<ReactCSSTransitionGroup {...transitionOpts}>
						{this.renderPosts()}
					</ReactCSSTransitionGroup>
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
