class UnitsController < ApplicationController

  def index
    units=Unit.all
    render json: units
  end

  def show
    unit = Unit.find_by(id:params[:id])
    render json: unit 
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

    params.permit(:unit_number,:image,:user_id,:apartment_id)
  end
end
