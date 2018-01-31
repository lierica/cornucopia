class Need < ApplicationRecord
	belongs_to :charity, :class_name => 'Organization'
	belongs_to :user

end
