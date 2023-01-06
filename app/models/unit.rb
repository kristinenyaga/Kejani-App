class Unit < ApplicationRecord
  belongs_to :user
  belongs_to :apartment
  has_many :reviews
 
end
