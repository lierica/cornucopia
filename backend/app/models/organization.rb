class Organization < ApplicationRecord
	has_many :users, :foreign_key => 'charity_id'
	has_many :users, :foreign_key => 'corporation_id'
end
