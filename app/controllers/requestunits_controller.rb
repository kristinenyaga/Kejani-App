class RequestunitsController < ApplicationController
  def index
    requested_units=Requestunit.all
    render json: requested_units
  end

  def show
    requested_unit = Requestunit.find_by(id:params[:id])
    render json: requested_unit 
  end

  def destroy
    requested_unit=Requestunit.find_by(id:params[:id])
    requested_unit.destroy
    head :no_content

  end

  def create
    requested_unit=Requestunit.create!(request_unit_params)
    render json: requested_unit,status: :created
  end


    
  def update   
    requested_unit = Requestunit.find_by(id: params[:id])
      if requested_unit
        requested_unit.update(request_unit_params)
        render json: requested_unit,status: :created
      else
        render json: { error: "Requestunit not found"}, status: :not_found
      end
   end

  private

  def request_unit_params

    params.permit(:category,:unit_number,:username,:location,:email,:phone_number,:user_id,:status,:unitid)
  end
end
