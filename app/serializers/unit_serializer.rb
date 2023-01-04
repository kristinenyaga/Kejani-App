class UnitSerializer < ActiveModel::Serializer
  attributes :id, :unit_number, :image,:user_id,:apartment_id
  # belongs_to  :lister

end
