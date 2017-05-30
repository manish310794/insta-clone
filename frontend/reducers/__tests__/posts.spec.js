import posts from '../posts';
import Reducer from '../../util/reducer';
import { 
	RECEIVE_POSTS,
	ADD_POST,
	LIKE_POST,
	UNLIKE_POST
} from '../../actions/post';
import deepFreeze from 'deep-freeze';

describe('post_reducer', () => {
	it('should have initial state', () => {
		expect(posts()).toEqual({});
	});

	it('should RECEIVE_POSTS with initialState', () => {
		let posts_json = [
			{id: 1},
			{id: 2}
		];
		let action = {
			type: RECEIVE_POSTS,
			posts: posts_json
		};
		let result = {
			1: {id: 1},
			2: {id: 2}
		};
		Reducer(posts).withAction(action).toEqualReturnState(result);
	});

	it('should RECEIVE_POSTS', () => {
		let state = {
			3: {id: 3}
		};

		let posts_json = [
			{id: 1},
			{id: 2}
		];

		let action = {
			type: RECEIVE_POSTS,
			posts: posts_json
		};

		let result = {
			1: {id: 1},
			2: {id: 2},
			3: {id: 3}
		};
		Reducer(posts).withState(state).withAction(action).toEqualReturnState(result);

		state = {
			2: {id: 2, liked_by_user: false},
			3: {id: 3}
		};
		Reducer(posts).withState(state).withAction(action).toEqualReturnState(result);
	});

	it('should ADD_POST', () => {
		let state = {
			1: {id: 1},
			2: {id: 2}
		};
		let post_json = {id: 3};
		let action = {
			type: ADD_POST,
			post: post_json
		};
		let result = {
			1: {id: 1},
			2: {id: 2},
			3: {id: 3}
		};
		Reducer(posts).withState(state).withAction(action).toEqualReturnState(result);
	});
});