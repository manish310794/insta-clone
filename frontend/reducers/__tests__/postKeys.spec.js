import Reducer from '../../util/reducer';
import { posts_json, post_json } from '../../util/posts';
import postKeys from '../postKeys';
import { RECEIVE_POSTS, ADD_POST } from '../../actions/post';

describe('postKeys reducer', () => {
	it('should return initial state', () => {
		expect(postKeys()).toEqual([]);
	});

	it('should return state for non-existing action', () => {
		let state = [1,2,3];
		let action = {
			type: 'NON-EXISTING'
		};
		let result = [1,2,3];
		Reducer(postKeys).withState(state).withAction(action).toEqualReturnState(result);
	});

	it('should RECEIVE_POSTS with initial state', () => {
		let action = {
			type: RECEIVE_POSTS,
			posts: posts_json
		};
		let result = [2,1];
		Reducer(postKeys).withAction(action).toEqualReturnState(result);
	});

	it('should RECEIVE_POSTS', () => {
		let state = [3,4];
		let action = {
			type: RECEIVE_POSTS,
			posts: posts_json
		};
		let result = [3,4,2,1];
		Reducer(postKeys).withState(state).withAction(action).toEqualReturnState(result);
	});

	it('should ADD_POST', () => {
		let state = [2,1];
		let action = {
			type: ADD_POST,
			post: post_json
		};
		let result = [3,2,1];
		Reducer(postKeys).withState(state).withAction(action).toEqualReturnState(result);
	});
});