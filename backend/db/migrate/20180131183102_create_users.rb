class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :role
      t.string :email
      t.string :phone
      t.string :photo
      t.string :password_digest
      t.integer :organization_id

      t.timestamps
    end
  end
end
