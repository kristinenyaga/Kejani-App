class UnitSerializer < ActiveModel::Serializer
  attributes :id, :unit_number,:price,:image_url,:occuppied,:category,:apartment_id,:user_id

  # belongs_to  :lister
  belongs_to  :user
  belongs_to :apartment

end
