class Like < ApplicationRecord
  belongs_to :post, counter_cache: true
  belongs_to :user

  validates_presence_of :post
  validates_presence_of :user
  validates_uniqueness_of :user, scope: :post
end
