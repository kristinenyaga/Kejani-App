class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :location, :email,:phone_number,:role, 
  has_many :units
  has_many :apartments
  
  # has_many :reviews
 
end
