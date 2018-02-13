class Surplus < ApplicationRecord
	belongs_to :organization

	belongs_to :user

	has_many :surplus_needs, :dependent => :destroy
	has_many :needs, through: :surplus_needs

	has_many :user_surplus_needs, :dependent => :destroy
	has_many :likers, :class_name => 'User', through: :user_surplus_needs
	has_many :pitched_needs, :class_name => 'Need', through: :user_surplus_needs

	validates :title, :description, :category, :units, :unit_category, :location, :available_date, :claim_by_date, :user_id, :organization_id, presence: true

	validates :units, numericality: true

end
