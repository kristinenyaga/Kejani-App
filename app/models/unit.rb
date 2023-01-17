class Unit < ApplicationRecord
  belongs_to :user
  belongs_to :apartment
  has_many :reviews

  validates :apartment_id, presence: true
  # validates :unit_id, presence: true
  validates :price, presence: true
  validates :image_url, presence: true
  validates :occuppied, presence: true
  validates :user_id, presence: true
  validates :category, presence: true
  validates :unit_number, presence: true
 
end



    
    
    
    
   
   