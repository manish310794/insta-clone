import {
	RECEIVE_COMMENTS,
	ADD_COMMENT
} from '../../actions/comment';
import comments from '../comments';
import Reducer from '../../util/reducer';

describe('comments reducer', () => {
	it('should return initialState', () => {
		expect(comments()).toEqual({});
	});

	it('should RECEIVE_COMMENTS', () => {
		let comments_json = {
			data: [
				{
					id: 1,
					text: "Comment 1"
				},
				{
					id: 2,
					text: "Comment 2"
				}
			],
			has_more_comments: true
		};

		let action = {
			type: RECEIVE_COMMENTS,
			comments: comments_json
		};

		let result = {
			1: {
				id: 1,
				text: "Comment 1"
			},
			2: {
				id: 2,
				text: "Comment 2"
			}
		};

		Reducer(comments).withAction(action).toEqualReturnState(result);
	});

	it('should ADD_COMMENT', () => {
		let state = {
			1: {
				id: 1,
				text: "Comment 1"
			}
		};

		let comment = {
			id: 2,
			text: "Comment 2"
		};

		let action = {
			type: ADD_COMMENT,
			comment: comment
		};

		let result = {
			1: {
				id: 1,
				text: "Comment 1"
			},
			2: {
				id: 2,
				text: "Comment 2"
			}
		};

		Reducer(comments).withState(state).withAction(action).toEqualReturnState(result);
	});

});