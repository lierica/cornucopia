class Organization < ApplicationRecord
	has_many :users
	has_many :needs
	has_many :surpluses
end
