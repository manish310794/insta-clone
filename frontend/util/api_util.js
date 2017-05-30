import fetch from 'isomorphic-fetch';

export const CREATE_POST_URL = '/api/posts';
export const FETCH_POSTS_URL = '/api/posts';
export const LOGOUT_URL = '/users/sign_out';

export const FORM_DATA = 'multipart/form-data';
export const JSON_DATA = 'application/json';

export const createPost = (post) => {
	return $.ajax({
		method: 'POST',
		url: CREATE_POST_URL,
		data: post,
		processData: false,
    contentType: false
	});
}

export const fetchPosts = () => {
	return $.ajax({
		url: FETCH_POSTS_URL,
		method: 'GET'
	});
}

export const fetchPost = (id) => {
	return $.ajax({
		url: '/api/posts/' + id,
		method: 'GET'
	});
}

export const likePost = (id) => {
	return $.ajax({
		url: '/api/posts/' + id + '/likes',
		method: 'POST',
		processData: false,
		contentType: false
	});
}

export const unlikePost = (id) => {
	return $.ajax({
		url: '/api/posts/' + id + '/likes',
		method: 'DELETE',
		processData: false,
		contentType: false
	});
}

export const logout = () => {
	return $.ajax({
		url: LOGOUT_URL,
		method: 'DELETE'
	});
}

export const fetchComments = (post, comments_before = 0) => {
	let url = null;
	if(comments_before == 0) {
		url = '/api/posts/' + post + '/comments';
	}
	else {
		url = '/api/posts/' + post + '/comments?comments_before=' + comments_before;
	}
	return $.ajax({
		url: url,
		method: 'GET'
	});
}

export const createComment = (post, comment) => {
	return $.ajax({
		method: 'POST',
		url: '/api/posts/' + post + '/comments',
		data: {comment: comment}
	});
}