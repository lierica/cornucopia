class SurplusUserSerializer < ActiveModel::Serializer
	attributes :id, :title, :description, :category, :units, :unit_category, :location, :available_date, :claim_by_date, :claimed, :pitched_needs

	has_many :pitched_needs, through: :user_surplus_needs

end
