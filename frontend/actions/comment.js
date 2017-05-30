import * as APIUtil from '../util/api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';

export const fetchComments = (post) => {
	return (dispatch) => {
		APIUtil.fetchComments(post).then(
			(success) => dispatch(receiveComments(post, success)),
			(err) => dispatch(receiveErrors(err))
		);
	};
};

export const commentOnPost = (post, comment) => {
	// console.log(comment);
	return (dispatch) => {
		APIUtil.createComment(post, comment).then(
			(success) => dispatch(addComment(post, success)),
			(err) => dispatch(receiveErrors(err))
		);
	};
};

export const loadMoreComments = (post, comments_before) => {
	return (dispatch) => {
		APIUtil.fetchComments(post, comments_before).then(
			(success) => dispatch(receiveComments(post, success)),
			(err) => dispatch(receiveErrors(err))
		);
	}
}

export const receiveComments = (post_id, comments) => ({
	type: RECEIVE_COMMENTS,
	post_id,
	comments
});

export const addComment = (post_id, comment) => ({
	type: ADD_COMMENT,
	post_id,
	comment
});