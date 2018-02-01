class CreateNeeds < ActiveRecord::Migration[5.1]
  def change
    create_table :needs do |t|
      t.string :title
      t.string :description
      t.string :category
      t.integer :units
      t.string :unit_category
      t.string :location
      t.date :fulfill_by_date
      t.boolean :fulfilled, default: false
      t.integer :user_id
      t.integer :organization_id

      t.timestamps
    end
  end
end
