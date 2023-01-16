class ApartmentsController < ApplicationController

  # def index
  #   apartments=Apartment.all

  #   render json: apartments,status: :ok

  # end

  # def create
  #   user = User.find_by(id: session[:user_id]);
  #   if user.role="lister"
  #      apartment = Apartment.create(apartment_params);
  #      render json:apartment, status: :created
  #   else
  #       render json: { errors: apartment.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end

  # private 
  # def apartment_params
  #   params.permit(:apartment_name,:apartment_type,:location,:user_id,:image_url)
  # end


  before_action :set_apartment, only: [:show, :update, :destroy]

  # GET /apartments
  def index
    @apartments = Apartment.where(user_id: @user.id)

    render json: @apartments
  end

  # GET /apartments/1
  def show
    render json: @apartment
  end

  # POST /apartments
  def create
    @apartment = Apartment.new(apartment_params)
    @apartment.user_id = @user.id

    if @apartment.save
      render json: @apartment, status: :created, location: @apartment
    else
      render json: @apartment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /apartments/1
  def update
    if @apartment.update(apartment_params)
      render json: @apartment
    else
      render json: @apartment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /apartments/1
  def destroy
    @apartment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_apartment
      @apartment = Apartment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def apartment_params
      params.require(:apartment).permit(:apartment_name,:apartment_type,:location,:user_id,:image_url)
    end

end
