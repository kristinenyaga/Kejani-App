class ReviewSerializer < ActiveModel::Serializer
  attributes :id,:description
  belongs_to :user
  belongs_to :unit
end
