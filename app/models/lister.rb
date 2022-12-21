class Lister < ApplicationRecord
  has_secure_password
  has_many :units

  has_many :users, through: :units
end
