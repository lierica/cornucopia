class Need < ApplicationRecord
	belongs_to :organization
	belongs_to :user
	has_many :surplus_needs, :dependent => :destroy

	has_many :user_surplus_needs, :dependent => :destroy

	validates :title, :description, :category, :units, :unit_category, :location, :fulfill_by_date, :user_id, :organization_id, presence: true

	validates :units, numericality: true
end
