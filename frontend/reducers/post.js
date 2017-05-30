import {
	LIKE_POST,
	UNLIKE_POST
} from '../actions/post';
import {
	RECEIVE_COMMENTS,
	ADD_COMMENT
} from '../actions/comment';

const post = (state = {}, action = {}) => {
	switch(action.type) {

		case LIKE_POST:
			return {
				...state,
				liked_by_user: true
			};

		case UNLIKE_POST:
			return {
				...state,
				liked_by_user: false
			};

		case RECEIVE_COMMENTS:
			let commentKeys = action.comments.data.map((comment) => {
				return comment.id;
			});
			let has_more_comments = action.comments.has_more_comments;
			return {
				...state,
				comments: {
					...state.comments,
					commentKeys: [
						...commentKeys,
						...state.comments.commentKeys
					],
					has_more_comments
				}
			};

		case ADD_COMMENT:
			return {
				...state,
				comments: {
					...state.comments,
					commentKeys: [
						...state.comments.commentKeys,
						action.comment.id
					]
				}
			};

		default:
			return state;
	}
};

export default post;