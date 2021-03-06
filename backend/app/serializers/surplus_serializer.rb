class SurplusSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :category, :units, :unit_category, :location, :available_date, :claim_by_date, :claimed, :pitched_needs

	belongs_to :user, serializer: UserNeedSurplusSerializer
	belongs_to :organization, serializer: OrganizationNeedSurplusSerializer
  has_many :pitched_needs

end
