class UnitSerializer < ActiveModel::Serializer
  attributes :id, :unit_number, :price, :image_url, :category,:property_name,:property_type,:location
  # belongs_to  :lister
  belongs_to  :user
  belongs_to  :lister

end
