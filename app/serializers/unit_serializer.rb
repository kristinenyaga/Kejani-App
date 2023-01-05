class UnitSerializer < ActiveModel::Serializer
  attributes :id, :unit_number, :image_url,:price,:category,:occuppied
  belongs_to  :user
  belongs_to :apartment

end
