class Surplus < ApplicationRecord
	belongs_to :corporation, :class_name => 'Organization'
	has_many :surplus_needs
	has_many :needs, through: :surplus_needs
	has_many :user_surpluses
	has_many :users, through: :user_surpluses
end
