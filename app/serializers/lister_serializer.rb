class ListerSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :image_url, :username, :phone_no
end
