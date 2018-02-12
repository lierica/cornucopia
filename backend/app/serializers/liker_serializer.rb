class LikerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :role, :email, :phone, :organization, :pitched_need_id

  def pitched_need_id
    object.user_surplus_needs.first.pitched_need.id
  end

end
