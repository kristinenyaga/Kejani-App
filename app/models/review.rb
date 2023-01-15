class Review < ApplicationRecord
  belongs_to :user
  belongs_to :unit
  validates :description, presence: true
end
