class UnitsController < ApplicationController

  def index
    units=Unit.all
    render json: units

  end

  def show
    unit = Unit.find_by(id:params[:id])
    render json: unit
    # include: ['reviews'], each_serializer: ReviewSerializer

  end

  def destroy
    unit=Unit.find_by(id:params[:id])
    unit.destroy
    head :no_content

  end

  def create
    unit=Unit.create!(unit_params)
    render json: unit,status: :created
  end

  def update
    unit=Unit.find_by(id:params[:id])
    unit.update!(unit_params)
    render json: unit, status: :ok
  end

  private

  def unit_params

    params.permit(:unit_number,:price,:image_url,:occuppied,:category,:apartment_id,:user_id)
  end
end


 

 
  
    
    
    
    
   
    
