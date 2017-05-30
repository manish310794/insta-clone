class Comment < ApplicationRecord
  belongs_to :user, inverse_of: :comments
  belongs_to :post, inverse_of: :comments

  validates_presence_of :post
  validates_presence_of :user

  scope :latest_first, -> { order(created_at: :desc) }
  scope :before, -> (id) { where("id < ?", id) }
end
