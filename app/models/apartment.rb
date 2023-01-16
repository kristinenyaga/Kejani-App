class Apartment < ApplicationRecord
  belongs_to :user
  has_many :units

#Validations
  validates :apartment_type, presence: true
  validates :location, presence: true
  validates :user_id, presence: true
  validates :image_url, presence: true
end




