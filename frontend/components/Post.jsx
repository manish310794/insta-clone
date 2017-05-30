import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardMedia, CardActions, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

import CommentsList from './CommentsList';
injectTapEventPlugin();

class Post extends React.Component {
	constructor(props) {
		super(props);
		this._handleLikeClick = this._handleLikeClick.bind(this);
		this._handleUnlikeClick = this._handleUnlikeClick.bind(this);
		this._handleKeyPress = this._handleKeyPress.bind(this);
		this._handleChange = this._handleChange.bind(this);
		this._handleLoadMoreCommentsClick = this._handleLoadMoreCommentsClick.bind(this);
		this.state = {
			text: null,
			caption: false,
			user_id: this.props.currentUser.id
		}
	}

	componentDidMount() {
		this.props.fetchComments(this.props.post.id);
	}

	_handleLoadMoreCommentsClick(e) {
		e.preventDefault();
		let comments = this.props.comments;
		this.props.loadMoreComments(this.props.post.id, comments[0].id);
	}

	_handleLikeClick() {
		this.props.likePost(this.props.post.id);
	}

	_handleUnlikeClick() {
		this.props.unlikePost(this.props.post.id);
	}

	_handleChange(e) {
		this.setState({text: e.target.value});
	}

	_handleKeyPress(e) {
		if(e.key == 'Enter') {
			this.props.commentOnPost(this.props.post.id, this.state);
			e.target.value = '';
		}
	}

	render() {
		const { post, comments } = this.props;
		let likeButton;
		if(!post.liked_by_user) {
			likeButton = (<IconButton onTouchTap={this._handleLikeClick}><i className="material-icons md-36">favorite_border</i></IconButton>);
		}
		else {
			likeButton = (<IconButton onTouchTap={this._handleUnlikeClick}><i className="material-icons md-36 red">favorite</i></IconButton>);
		}
		return (
			<Card className="post">
				<CardHeader
					title={post.user.email}
				/>
				<CardMedia>
					<img src={post.attachment.medium.url} />
				</CardMedia>
				{post.comments.count > 0 ? (
					<CardText>
						{post.comments.has_more_comments ? (
							<a href="#" onClick={this._handleLoadMoreCommentsClick}>Load Previous Comments</a>
						) : null}
						<CommentsList comments={comments} />
					</CardText>
				) : null}
				<CardActions>
					{likeButton}
					<input className="comment-box post-card-action" type="text" onKeyPress={this._handleKeyPress} onChange={this._handleChange} placeholder='Your comment here...'/>
				</CardActions>
			</Card>
		);
	}
}

Post.propTypes = {
	post: PropTypes.object.isRequired,
	currentUser: PropTypes.object.isRequired,
	likePost: PropTypes.func.isRequired,
	unlikePost: PropTypes.func.isRequired,
	fetchComments: PropTypes.func.isRequired,
	loadMoreComments: PropTypes.func.isRequired,
	commentOnPost: PropTypes.func.isRequired
};

export default Post;