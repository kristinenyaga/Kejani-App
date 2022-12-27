class User < ApplicationRecord
    has_secure_password
    has_many :units
    has_many :reviews, through: :units

end
