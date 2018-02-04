class User < ApplicationRecord
	has_secure_password

	belongs_to :organization

	has_many :user_surplus_needs
	has_many :liked_surpluses, through: :user_surplus_needs
	has_many :pitched_needs, through: :user_surplus_needs

	has_many :surpluses
	has_many :needs

	validates :first_name, :last_name, :role, :email, :phone, :password_digest, presence: true

	validates :email, uniqueness: true

	validates :phone, length: {is: 10}

end
