json.extract! post, :id, :created_at
json.user do
	json.partial! 'api/users/user', user: post.user
end
json.caption do
	json.partial! 'api/comments/comment', comment: post.caption if post.caption
end
json.comments do
	json.count post.comments.count
end
json.likes do
	json.count post.likes.count
end
json.liked_by_user post.liked_by?(current_user)
if post.attachment
	json.attachment do
		json.medium do
			json.url post.attachment.url(:medium)
		end
		json.thumb do
			json.url post.attachment.url(:thumb)
		end
		json.thumb do
			json.url post.attachment.url(:high)
		end
	end
end
