class Surplus < ApplicationRecord
	belongs_to :organization

	belongs_to :user

	has_many :surplus_needs
	has_many :needs, through: :surplus_needs

	has_many :user_surplus_needs
	has_many :likers, :class_name => 'User', through: :user_surplus_needs
	has_many :pitched_needs, :class_name => 'Need', through: :user_surplus_needs

end
