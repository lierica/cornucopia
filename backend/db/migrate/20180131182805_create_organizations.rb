class CreateOrganizations < ActiveRecord::Migration[5.1]
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :sector
      t.string :description
      t.string :category

      t.timestamps
    end
  end
end
