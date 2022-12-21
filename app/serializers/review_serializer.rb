class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :description, :unit_id
  belongs_to :user
end
