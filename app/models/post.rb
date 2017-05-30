class Post < ApplicationRecord
  has_attached_file :attachment, styles: { medium: "900x900>", thumb: "100x100>" }
  
  belongs_to :user
  has_many :comments, -> { where(caption: false) }
  has_one :caption, -> { where(caption: true) }, class_name: 'Comment', inverse_of: :post
  accepts_nested_attributes_for :caption
  has_many :likes

  validates_presence_of :user
  validates_presence_of :attachment
  validates_attachment_content_type :attachment, content_type: /\Aimage\/.*\z/

  scope :latest_first, -> { order(updated_at: :desc) }

  def liked_by?(user)
  	self.likes.find_by(user: user).present?
  end

end
