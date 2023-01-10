class CreateRequestunits < ActiveRecord::Migration[6.1]
  def change
    create_table :requestunits do |t|
      t.string :username
      t.string :email
      t.string :phone_number
      t.string :unit_number
      t.string :category
      t.string :location
      t.string :user_id


      t.timestamps
    end
  end
end
