class ApartmentsController < ApplicationController
  # skip_before_action :authenticate_user
     def index
    apartments=Apartment.all

    render json: apartments,status: :ok

  end

  def create
    user = User.find_by(id: session[:user_id]);
    if user.role="lister"
       apartment = Apartment.create(apartment_params);
       render json:apartment, status: :created
    else
        render json: { errors: apartment.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private 
  def apartment_params
    params.permit(:apartment_name,:apartment_type,:location,:user_id,:image_url)
  end

end
