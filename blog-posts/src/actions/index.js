import axios from 'axios';

const API_ENDPOINT = 'http://reduxposts.herokuapp.com/api/v1/posts';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

export function fetchPosts() {
	const url = API_ENDPOINT;
	const promise = axios.get(url);
	return {
		type: FETCH_POSTS,
		payload: promise
	}
}

export function fetchPost(id) {
	const url = `${API_ENDPOINT}/${id}`;
	const promise = axios.get(url);
	return {
		type: FETCH_POST,
		payload: promise
	}
}

export function createPost(props) {
	const url = API_ENDPOINT;
	const promise = axios.post(url, props);
	return {
		type: CREATE_POST,
		payload: promise
	}
}

export function deletePost(id) {
	const url = `${API_ENDPOINT}/${id}`;
	const promise = axios.delete(url);
	return {
		type: DELETE_POST,
		payload: promise
	}
}