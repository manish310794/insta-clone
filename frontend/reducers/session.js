import { LOGOUT } from '../actions/session';

const defaultUserState = {
	currentUser: null
}

const session = (state = defaultUserState, action) => {
	switch(action.type) {
		case LOGOUT:
			return defaultUserState;
		default:
			return state;
	}
};

export default session;