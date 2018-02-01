class SurplusNeed < ApplicationRecord
  belongs_to :surplus
  belongs_to :need
  has_many :surplus_needs
end
