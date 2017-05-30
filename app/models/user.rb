class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/avatar.png"

  has_many :posts do
  	def find_post(id)
  		find_by(id: id)
  	end
  end
  has_many :comments, inverse_of: :user

  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/
  
end
