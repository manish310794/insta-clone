import { RECEIVE_POSTS, ADD_POST } from '../actions/post';

const postKeys = (state = [], action = {}) => {
	switch(action.type) {
		case ADD_POST:
			return [
				action.post.id,
				...state
			];

		case RECEIVE_POSTS:
			let posts = action.posts.map((post) => {
				return post.id;
			});
			return [
				...state,
				...posts
			];

		default:
			return state;
	}
};

export default postKeys;