class Need < ApplicationRecord
	belongs_to :organization
	belongs_to :user
	has_many :surplus_needs
end
