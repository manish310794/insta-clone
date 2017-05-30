import { connect } from 'react-redux';

import { createPost } from '../actions/post';
import CreatePostForm from '../components/CreatePostForm';

const mapStateToProps = (state) => ({
	currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
	createPost: (post_data) => dispatch(createPost(post_data))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreatePostForm);