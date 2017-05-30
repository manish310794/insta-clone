import { createSelector } from 'reselect';

export const getPostCommentKeys = (state, props = {}) => {
	return props.post.comments.commentKeys;
}

export const getAllComments = (state, props = {}) => {
	return state.comments;
}

export const getPostComments = createSelector(
	[getPostCommentKeys, getAllComments],
	(commentKeys, comments) => {
		return commentKeys.map((key) => {
			return comments[key];
		});
	}
);