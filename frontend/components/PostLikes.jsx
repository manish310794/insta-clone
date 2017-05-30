import React from 'react';
import PropTypes from 'prop-types';

class PostLikes extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { likes_count, liked_by_user, handleLikeClick, handleUnlikeClick } = this.props;
		let button;
		if(!liked_by_user) {
			button = (<button onClick={handleLikeClick}>Like</button>)
		}
		else {
			button = (<button onClick={handleUnlikeClick}>Unlike</button>)
		}
		return (
			<div className="post-likes">
				{button}
				{likes_count}
			</div>
		);
	}
}

PostLikes.propTypes = {
	likes_count: PropTypes.number.isRequired,
	liked_by_user: PropTypes.bool.isRequired,
	handleLikeClick: PropTypes.func.isRequired,
	handleUnlikeClick: PropTypes.func.isRequired
}

export default PostLikes