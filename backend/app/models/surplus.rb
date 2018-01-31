class Surplus < ApplicationRecord
	belongs_to :corporation, :class_name => 'Organization'
	belongs_to :user
	has_many :surplus_needs
	has_many :needs, through: :surplus_needs
	has_many :user_surpluses
	has_many :likers, :class_name => 'User', through: :user_surpluses

end
