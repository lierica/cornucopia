class SurplusUserSerializer < ActiveModel::Serializer
	attributes :id, :title, :description, :category, :units, :unit_category, :location, :available_date, :claim_by_date, :claimed
	
end
