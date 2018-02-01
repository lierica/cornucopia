class UserSurplusNeed < ApplicationRecord
  belongs_to :liker, :class_name => 'User', :foreign_key => 'user_id'
  belongs_to :liked_surplus, :class_name => 'Surplus', :foreign_key => 'surplus_id'
  belongs_to :pitched_need, :class_name => 'Need', :foreign_key => 'need_id'
end
