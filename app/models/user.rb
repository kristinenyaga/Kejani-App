class User < ApplicationRecord
    has_secure_password
    has_many :apartments
    has_many :units
    has_many :reviews
    
   
end
