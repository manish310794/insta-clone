import React from 'react';
import { List, ListItem } from 'material-ui/List';

class CommentsList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let comments = null;
		if(this.props.comments) {
			comments = this.props.comments.map((comment) =>
				<ListItem
					key={comment.id}
					secondaryText={
						<p><span style={{color: 'black'}}>{comment.from.email}</span> --
						{comment.text}</p>
					}
				/>
			);
		}
		else {
			comments = (<p>No comments yet</p>);
		}
		return (
			<List>
				{comments}
			</List>
		);
	}
}

export default CommentsList;