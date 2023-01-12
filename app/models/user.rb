class User < ApplicationRecord
    #Validation
    validates :role, presence: true
    validates :location, presence: true
    validates :username, presence: true
    validates :password_digest, presence: true
    validates :email, presence: true
    validates :phone_number, presence: true
    validates :email, presence: true
    
    #Relationship
    has_secure_password
    has_many :apartments
    has_many :units
    has_many :reviews
    has_many :requestunits
    
   
end


