class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :location, :email, :password_digest, :phone_number
  has_many :units
  has_many :listers, through: :units
  # has_many :reviews
 
end
