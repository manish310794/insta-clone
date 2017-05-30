class Api::LikesController < ApplicationController
	before_action :set_post, only: [:index, :create, :destroy]

	def index
		@likes = @post.likes
	end

	def create
		@like = @post.likes.build(user: current_user)
		if @like.save
			render :show
		else
			render json: @like.errors.full_messages, status: 422
		end
	end

	def destroy
		@like = @post.likes.find_by(user: current_user)
		@like.destroy if @like
		render :show
	end

	private
	def set_post
		@post = Post.find(params[:post_id])
	end

end