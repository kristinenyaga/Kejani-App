class CreateUnits < ActiveRecord::Migration[6.1]
  def change
    create_table :units do |t|
      t.integer :unit_number
      t.integer :price
      t.string :category
      t.string :image_url
      t.integer :user_id
      t.string :occuppied,default: "vacant"
      t.string :apartment_id
      t.timestamps
    end
  end
end
