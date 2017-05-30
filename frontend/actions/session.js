import * as APIUtil from '../util/api_util';

export const LOGOUT = 'LOGOUT';

export const logout = () => {
	return (dispatch) => {
		APIUtil.logout().then(
			(success) => dispatch(deleteSession()),
			(err) => dispatch(receiveErrors(err))
		);
	}
}

export const deleteSession = () => ({
	type: LOGOUT
});