class User < ApplicationRecord
    has_secure_password
    has_many :units
    has_many :apartments
   
end
