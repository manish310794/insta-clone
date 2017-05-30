import {
	RECEIVE_COMMENTS,
	ADD_COMMENT
} from '../actions/comment';

const comments = (state = {}, action = {}) => {
	switch(action.type) {

		case ADD_COMMENT:
			return {
				...state,
				[action.comment.id]: action.comment
			};

		case RECEIVE_COMMENTS:
			let newState = {...state};
			action.comments.data.forEach((comment) => {
				newState = {
					...newState,
					[comment.id]: comment
				};
			});
			return newState;

		default:
			return state;
	}
}

export default comments;