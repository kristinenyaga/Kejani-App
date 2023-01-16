class ApartmentSerializer < ActiveModel::Serializer
  attributes :id,:apartment_name,:apartment_type,:location,:user_id,:image_url
end
