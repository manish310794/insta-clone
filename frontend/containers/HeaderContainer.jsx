import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session';
import Header from '../components/Header';

const mapStateToProps = (state) => ({
	currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
	logout: () =>  dispatch(logout())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);