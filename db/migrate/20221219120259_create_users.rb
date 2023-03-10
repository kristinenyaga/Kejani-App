class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :location
      t.string :email
      t.string :password_digest
      t.integer :phone_number
      t.string :role

      t.timestamps
    end
  end
end
