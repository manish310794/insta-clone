import { 
	RECEIVE_POSTS,
	ADD_POST,
} from '../actions/post';
import { 
	RECEIVE_COMMENTS,
	RECEIVE_COMMENT,
	RECEIVE_MORE_COMMENTS
} from '../actions/comment';
import post from './post';

const updateItemInArray = (items, item_id, updateItemCallback) => {
	let updatedItems = items.map((item) => {
		if(item.id == item_id)
			return updateItemCallback(item);
		return item;
	});
	return updatedItems;
}

const posts = (state = {}, action = {}) => {
	switch(action.type) {
		case RECEIVE_POSTS:
			let newState = Object.assign({}, state);
			action.posts.forEach((post) => {
				newState = Object.assign({}, newState, {
					[post.id]: post
				});
			});
			return newState;

		case ADD_POST:
			return Object.assign({}, state, {[action.post.id]: action.post});

		default:
			if(action.post_id) {
				return {
					...state,
					[action.post_id]: post(state[action.post_id], action)
				};
			}
			else {
				return state;
			}
	}
};

export default posts;