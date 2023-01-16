class UnitsController < ApplicationController

  # def index
  #   units=Unit.all
  #   render json: units

  # end

  # def show
  #   unit = Unit.find_by(id:params[:id])
  #   render json: unit
  #   # include: ['reviews'], each_serializer: ReviewSerializer

  # end

  # def destroy
  #   unit=Unit.find_by(id:params[:id])
  #   unit.destroy
  #   head :no_content

  # end

  # def create
  #   unit=Unit.create!(unit_params)
  #   render json: unit,status: :created
  # end

  # def update
  #   unit=Unit.find_by(id:params[:id])
  #   unit.update!(unit_params)
  #   render json: unit, status: :ok
  # end

  # private

  # def unit_params

  #   params.permit(:unit_number,:price,:image_url,:occuppied,:category,:apartment_id,:user_id)
  # end


  before_action :set_unit, only: [:index, :show, :update, :destroy]

  # GET /units
  def index
    @units = Unit.where(user_id: @user.id)

    render json: @units
  end

  # GET /units/1
  def show
    render json: @unit
  end

  # POST /units
  def create
    @unit = Unit.new(unit_params)
    @unit.user_id = @user.id

    if @unit.save
      render json: @unit, status: :created, location: @unit
    else
      render json: @unit.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /units/1
  def update
    if @unit.update(unit_params)
      render json: @unit
    else
      render json: @unit.errors, status: :unprocessable_entity
    end
  end

  # DELETE /units/1
  def destroy
    @unit.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_unit
      @unit = Unit.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def unit_params
      params.require(:unit).permit(:unit_number,:price,:image_url,:occuppied,:category,:apartment_id,:user_id)
    end
end



 

 
  
    
    
    
    
   
    
