class UserSurplus < ApplicationRecord
  belongs_to :liker, :class_name => 'User', :foreign_key => 'user_id'
  belongs_to :liked_surplus, :class_name => 'Surplus', :foreign_key => 'surplus_id'
end
