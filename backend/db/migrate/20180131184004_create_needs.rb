class CreateNeeds < ActiveRecord::Migration[5.1]
  def change
    create_table :needs do |t|
      t.string :title
      t.string :description
      t.string :category
      t.integer :unit
      t.string :unit_type
      t.string :frequency
      t.string :location
      t.date :posted_date
      t.date :fulfill_by_date
      t.boolean :fulfilled, default: false
      t.integer :charity_id

      t.timestamps
    end
  end
end
