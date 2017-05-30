import {
	LIKE_POST,
	UNLIKE_POST
} from '../../actions/post';
import {
	RECEIVE_COMMENTS,
	ADD_COMMENT
} from '../../actions/comment';
import post from '../post';
import Reducer from '../../util/reducer';

describe('post reducer', () => {
	it('should return initialState', () => {
		expect(post()).toEqual({});
	});

	it('should LIKE_POST', () => {
		let state = {
			id: 1,
			liked_by_user: false
		};

		let action = {
			type: LIKE_POST,
			post: 1
		};

		let result = {
			id: 1,
			liked_by_user: true
		};

		Reducer(post).withState(state).withAction(action).toEqualReturnState(result);
	});

	it('should UNLIKE_POST', () => {
		let state = {
			id: 1,
			liked_by_user: true
		};

		let action = {
			type: UNLIKE_POST,
			post: 1
		};

		let result = {
			id: 1,
			liked_by_user: false
		};

		Reducer(post).withState(state).withAction(action).toEqualReturnState(result);
	});

	it('should RECEIVE_COMMENTS', () => {
		let state = {
			id: 1,
			comments: {
				commentKeys: []
			}
		};

		let comments = {
			data: [
				{
					id: 11,
					text: 'Comment 1'
				},
				{
					id: 12,
					text: 'Comment 2'
				}
			],
			has_more_comments: true
		};

		let action = {
			type: RECEIVE_COMMENTS,
			comments
		};

		let result = {
			id: 1,
			comments: {
				commentKeys: [11, 12],
				has_more_comments: true
			}
		};

		Reducer(post).withState(state).withAction(action).toEqualReturnState(result);

		state = {
			id: 1,
			comments: {
				commentKeys: [13],
				has_more_comments: false
			}
		};

		result = {
			id: 1,
			comments: {
				commentKeys: [11, 12, 13],
				has_more_comments: true
			}
		};

		Reducer(post).withState(state).withAction(action).toEqualReturnState(result);		
	});

	it('should ADD_COMMENT', () => {
		let state = {
			id: 1,
			comments: {
				commentKeys: [1,2]
			}
		};

		let comment = {
			id: 3,
			text: 'New comment'
		}

		let action = {
			type: ADD_COMMENT,
			post_id: 1,
			comment
		}

		let result = {
			id: 1,
			comments: {
				commentKeys: [1,2,3]
			}
		};

		Reducer(post).withState(state).withAction(action).toEqualReturnState(result);
	});
});