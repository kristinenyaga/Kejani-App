class CreateListers < ActiveRecord::Migration[6.1]
  def change
    create_table :listers do |t|
      t.string :email
      t.string :password_digest
      t.string :image_url
      t.string :username
      t.integer :phone_no

      t.timestamps
    end
  end
end
