class Api::PostsController < ApplicationController

	def index
		@posts = Post.all.latest_first
	end

	def create
		@post = current_user.posts.new(post_params)
		if @post.save
			render :show
		else
			render json: @post.errors.full_messages, status: 422
		end
	end

	def show
		@post = Post.find(params[:id])
	end

	private
	def post_params
		params.require(:post).permit(:attachment, caption_attributes: [:text, :user_id, :caption])
	end

end