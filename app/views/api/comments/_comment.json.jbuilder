json.extract! comment, :id, :text, :created_at, :updated_at
json.from do
	json.partial! 'api/users/user', user: comment.user
end