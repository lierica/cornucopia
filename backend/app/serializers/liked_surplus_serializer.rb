class LikedSurplusSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :category, :units, :unit_category, :location, :available_date, :claim_by_date, :claimed, :pitched_need_id

	def pitched_need_id
		object.user_surplus_needs.first.pitched_need.id
	end

end
