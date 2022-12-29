class CreateApartments < ActiveRecord::Migration[6.1]
  def change
    create_table :apartments do |t|
      t.string :apartment_name
      t.string :apartment_type
      t.string :location
      t.string :user_id
      t.string :image_url


      t.timestamps
    end
  end
end
