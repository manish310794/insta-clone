import React from 'react';
import { connect } from 'react-redux';

import { likePost, unlikePost } from '../actions/post';
import { fetchComments, commentOnPost, loadMoreComments } from '../actions/comment';
import Post from '../components/Post';
import { getPostComments } from '../selectors/postComments';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	post: ownProps.post,
	comments: getPostComments(state, ownProps)
});

const mapDispatchToProps = (dispatch) => ({
	likePost: (post) => dispatch(likePost(post)),
	unlikePost: (post) => dispatch(unlikePost(post)),
	fetchComments: (post) => dispatch(fetchComments(post)),
	commentOnPost: (post, comment) => dispatch(commentOnPost(post, comment)),
	loadMoreComments: (post, comments_before) => dispatch(loadMoreComments(post, comments_before))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Post);