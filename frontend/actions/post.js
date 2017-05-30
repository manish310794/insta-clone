import * as APIUtil from '../util/api_util';

export const ADD_POST = 'ADD_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const LIKE_POST = 'LIKE_POST';
export const UNLIKE_POST = 'UNLIKE_POST';

const processPosts = (posts) => {
	return posts.map((post) => {
		return processPost(post);
	});
}

const processPost = (post) => {
	if(!post.comments.commentKeys) {
		post.comments.commentKeys = [];
	}
	return post;
}

export const createPost = (post) => {
	return (dispatch) => {
		APIUtil.createPost(post).then(
			(success) => dispatch(processPost(addPost(success))),
			(err) => receiveErrors(err)
		);
	}
}

export const fetchPosts = () => {
	return (dispatch) => {
		APIUtil.fetchPosts().then(
			(success) => dispatch(receivePosts(processPosts(success))),
			(err) => dispatch(receiveErrors(err))
		);
	}
}

export const likePost = (id) => {
	return (dispatch) => {
		APIUtil.likePost(id).then(
			(success) => dispatch(likedByUser(id)),
			(err) => dispatch(receiveErrors(err))
		);
	}
}

export const unlikePost = (id) => {
	return (dispatch) => {
		APIUtil.unlikePost(id).then(
			(success) => dispatch(unlikedByUser(id)),
			(err) => dispatch(receiveErrors(err))
		);
	}
}

export const addPost = (post) => ({
	type: ADD_POST,
	post
});

export const receivePosts = (posts) => ({
	type: RECEIVE_POSTS,
	posts
});

export const likedByUser = (post_id) => ({
	type: LIKE_POST,
	post_id
});

export const unlikedByUser = (post_id) => ({
	type: UNLIKE_POST,
	post_id
})