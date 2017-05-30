class Api::CommentsController < ApplicationController
	before_action :set_post, only: [:index, :create]
	before_action :set_pagination_defaults

	def index
		if params[:comments_before]
			@total_comments = @post.comments.latest_first.before(params[:comments_before])
		else
			@total_comments = @post.comments.latest_first
		end
			@comments = @total_comments.limit(params[:limit]).reverse
			@has_more_comments = @total_comments.size > @comments.size
	end

	def create
		@comment = @post.comments.build(comment_params)
		@comment.user = current_user
		if @comment.save
			render :show
		else
			render json: @comment.errors.full_messages, status: 422
		end
	end

	private
	def set_post
		@post = Post.find(params[:post_id])
	end

	def comment_params
		params.require(:comment).permit(:text, :caption, :user_id)
	end

	def set_pagination_defaults
		params[:limit] ||= 5
	end

end