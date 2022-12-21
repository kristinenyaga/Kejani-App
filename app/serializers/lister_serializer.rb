class ListerSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :image_url, :username, :phone_no
  has_many :units

  has_many :users, through: :units
end
