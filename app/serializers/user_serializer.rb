class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :location, :email, :password_digest, :phone_number
end
