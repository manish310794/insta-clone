import { combineReducers } from 'redux';
import session from './session';
import posts from './posts';
import postKeys from './postKeys';
import comments from './comments';

const rootReducer = combineReducers({
	session,
	postKeys,
	posts,
	comments
});

export default rootReducer;