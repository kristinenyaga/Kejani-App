class ApartmentsController < ApplicationController
    def index
        apartments=Apartment.all
        render json: apartments
    
      end
    
      def show
        apartment = Apartment.find_by(id:params[:id])
        render json: apartment
    
      end
    
      def destroy
        apartment=Apartment.find_by(id:params[:id])
        apartment.destroy
        head :no_content
    
      end
    
      def create
        apartment=Apartment.create!(apartment_params)
        render json: apartment,status: :created
      end
    
    
      def update
        apartment=Apartment.find_by(id:params[:id])
        apartment.update!(apartment_params)
        render json: apartment, status: :ok
      end
    
      private
    
      def apartment_params
    
        params.permit(:apartment_type, :apartment_name,:location,:image_url,:user_id)
      end
    
end

    
    
    
    