class User < ApplicationRecord
    has_secure_password
    has_many :units
    has_many :listers, through: :units
    has_many :reviews
   
end
