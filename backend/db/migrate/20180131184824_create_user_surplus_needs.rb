class CreateUserSurplusNeeds < ActiveRecord::Migration[5.1]
  def change
    create_table :user_surplus_needs do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :surplus, foreign_key: true
      t.belongs_to :need, foreign_key: true

      t.timestamps
    end
  end
end
