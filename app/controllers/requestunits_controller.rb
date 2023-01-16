class RequestunitsController < ApplicationController
  # def index
  #   requested_units=Requestunit.all
  #   render json: requested_units
  # end

  # def show
  #   requested_unit = Requestunit.find_by(id:params[:id])
  #   render json: requested_unit 
  # end

  # def destroy
  #   requested_unit=Requestunit.find_by(id:params[:id])
  #   requested_unit.destroy
  #   head :no_content

  # end

  # def create
  #   requested_unit=Requestunit.create!(request_unit_params)
  #   render json: requested_unit,status: :created
  # end


  # def update
  #   requested_unit=Requestunit.find_by(id:params[:id])
  #   requested_unit.update!(request_unit_params)
  #   render json: requested_unit, status: :ok
  # end

  # private

  # def request_unit_params

  #   params.permit(:category,:unit_number,:username,:location,:email,:phone_number)
  # end

  before_action :set_requestunit, only: [:show, :update, :destroy]

  # GET /requestunits
  def index
    @requestunits = Requestunit.where(user_id: @user.id)

    render json: @requestunits
  end

  # GET /requestunits/1
  def show
    render json: @requestunit
  end

  # POST /requestunits
  def create
    @requestunit = Requestunit.new(requestunit_params)
    @requestunit.user_id = @user.id

    if @requestunit.save
      render json: @requestunit, status: :created, location: @requestunit
    else
      render json: @requestunit.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /requestunits/1
  def update
    if @requestunit.update(requestunit_params)
      render json: @requestunit
    else
      render json: @requestunit.errors, status: :unprocessable_entity
    end
  end

  # DELETE /requestunits/1
  def destroy
    @requestunit.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_requestunit
      @requestunit = Requestunit.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def requestunit_params
      params.require(:requestunit).permit(:category,:unit_number,:username,:location,:email,:phone_number)
    end



end
