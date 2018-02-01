class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :role, :email, :phone, :photo

	belongs_to :organization
	has_many :liked_surpluses, serializer: LikedSurplusSerializer
	has_many :surpluses, serializer: SurplusUserSerializer
	has_many :needs, serializer: NeedUserSerializer

end
