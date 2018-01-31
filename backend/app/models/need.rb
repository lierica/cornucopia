class Need < ApplicationRecord
	belongs_to :charity, :class_name => 'Organization'
	has_many :surplus_needs
	has_many :surpluses, through: :surplus_needs

end
