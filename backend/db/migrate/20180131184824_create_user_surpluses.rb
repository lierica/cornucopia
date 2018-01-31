class CreateUserSurpluses < ActiveRecord::Migration[5.1]
  def change
    create_table :user_surpluses do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :surplus, foreign_key: true

      t.timestamps
    end
  end
end
