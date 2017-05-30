json.data do
	json.array! @comments do |comment|
		json.partial! 'api/comments/comment', comment: comment
	end
end

json.has_more_comments @has_more_comments