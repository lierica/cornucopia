class CreateSurpluses < ActiveRecord::Migration[5.1]
  def change
    create_table :surpluses do |t|
      t.string :title
      t.string :description
      t.string :category
      t.integer :units
      t.string :unit_type
      t.string :location
      t.date :available_date
      t.date :claim_by_date
      t.boolean :claimed, default: false
      t.integer :user_id
      t.integer :corporation_id

      t.timestamps
    end
  end
end
