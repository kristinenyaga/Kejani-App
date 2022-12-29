class ApartmentsController < ApplicationController

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

end
