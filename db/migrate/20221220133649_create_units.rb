class CreateUnits < ActiveRecord::Migration[6.1]
  def change
    create_table :units do |t|
      t.integer :unit_number
      t.integer :price
      t.string :image_url
      t.string :category
      t.integer :user_id
      t.integer :lister_id
      t.string :property_name
      t.string :property_type
      t.string :location


      t.timestamps
    end
  end
end
