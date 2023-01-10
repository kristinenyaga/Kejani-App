class User < ApplicationRecord
    validates :role, presence: true
    has_secure_password
    has_many :apartments
    has_many :units
    has_many :reviews
    has_many :requestunits
    
   
end
