class ApartmentsController < ApplicationController

  def index
    apartments=Apartment.all

    render json: apartments,status: :ok

  end

  def create
    apartment=Apartment.create!(apartment_params)
    render json: apartment,status: :created
  end

  private 
  def apartment_params
    params.permit(:apartment_name,:apartment_type,:location,:user_id,:image_url)
  end

end