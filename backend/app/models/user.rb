class User < ApplicationRecord
	has_secure_password
	belongs_to :charity, :class_name => 'Organization', optional: true
	belongs_to :corporation, :class_name => 'Organization', optional: true
	has_many :user_surpluses
	has_many :liked_surpluses, through: :user_surpluses
	has_many :surpluses
	has_many :needs
end
