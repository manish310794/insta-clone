import React from 'react';
import Dropzone from 'react-dropzone';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardMedia } from 'material-ui/Card';

class CreatePostForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			caption_attributes: {
				text: 'This is a new post created from React',
				user_id: this.props.currentUser.id,
				caption: true
			},
			attachment: null,
			image_src: null
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onDrop = this.onDrop.bind(this);
		// this.previewImage = this.previewImage.bind(this);
	}

	onDrop(files) {
		this.setState({
			attachment: files[0]
		});
		
		let reader = new FileReader();
		reader.onload = function(event) {
			this.setState({
				image_src: event.target.result
			})
		}.bind(this);
		reader.readAsDataURL(files[0]);
	}

	handleSubmit(e) {
		e.preventDefault();

		let formData = new FormData();
		formData.append('post[caption_attributes][text]', this.state.caption_attributes.text);
		formData.append('post[caption_attributes][user_id]', this.state.caption_attributes.user_id);
		formData.append('post[caption_attributes][caption]', this.state.caption_attributes.caption);
		if(this.state.attachment) {
			formData.append('post[attachment]', this.state.attachment);
		}
		this.props.createPost(formData);
	}

	render() {
		let imagePreview = null
		if(this.state.image_src) {
			imagePreview = (
				<Card className="post">
					<CardMedia>
						<img src={this.state.image_src} width='100%' height='100%' />
					</CardMedia>
				</Card>
			);
		}
		else {
			imagePreview = (
				<div className="post-upload-dropzone">
					<Dropzone onDrop={this.onDrop}>
						<p>Upload a picture here</p>
					</Dropzone>
				</div>
			);
		}

		return(
			<div>
				{imagePreview}
			</div>
		);
	}
}

export default CreatePostForm;