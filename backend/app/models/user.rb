class User < ApplicationRecord
	has_secure_password

	belongs_to :organization

	has_many :user_surplus_needs
	has_many :liked_surpluses, through: :user_surplus_needs
	has_many :pitched_needs, through: :user_surplus_needs

	has_many :surpluses
	has_many :needs

end
