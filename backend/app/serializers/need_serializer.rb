class NeedSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :category, :units, :unit_category, :location, :fulfilled, :fulfilled_by, :fulfill_by_date

	belongs_to :user, serializer: UserNeedSurplusSerializer
	belongs_to :organization, serializer: OrganizationNeedSurplusSerializer

  def fulfilled_by
    object.surplus_needs.map do |surplus_need|
      surplus = Surplus.find(surplus_need.surplus_id)
        {surplus_id: surplus.id}
    end
  end


end
