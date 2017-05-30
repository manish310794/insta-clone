import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'material-ui/List';
import PostContainer from '../containers/PostContainer';

const PostList = ({	posts, postKeys }) => (
	<List>
		{postKeys.map(id =>
			<PostContainer key={id} post={posts[id]} />
		)}
	</List>
);

PostList.propTypes = {
	posts: PropTypes.object.isRequired,
	postKeys: PropTypes.array.isRequired
}

export default PostList;