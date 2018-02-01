class UserNeedSurplusSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :role, :email, :phone
end
