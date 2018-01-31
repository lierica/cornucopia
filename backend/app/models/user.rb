class User < ApplicationRecord
	has_secure_password
	belongs_to :charity, :class_name => 'Organization'
	belongs_to :corporation, :class_name => 'Organization'
	has_many :user_surpluses
	has_many :surpluses, through: :user_surpluses
end
