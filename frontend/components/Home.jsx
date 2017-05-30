import React from 'react';
import Paper from 'material-ui/Paper';
import CreatePostContainer from '../containers/CreatePostContainer';
import PostListContainer from '../containers/PostListContainer';

const Home = () => (
	<div className="home">
		<div className="main-body">
			<CreatePostContainer />
			<PostListContainer />
		</div>
	</div>
);

export default Home;