import React from 'react';
import { connect } from 'react-redux';

import PostList from '../components/PostList';
import { fetchPosts } from '../actions/post';

class PostListContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>
				<PostList posts={this.props.posts} postKeys={this.props.postKeys} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.session.currentUser,
	postKeys: state.postKeys,
	posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
	fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostListContainer);