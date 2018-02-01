class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :sector, :description, :category, :logo
end
