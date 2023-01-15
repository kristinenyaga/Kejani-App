class ReviewsController < ApplicationController

  def index
    reviews=Review.all
    render json: reviews
  end

  def show
    review = Review.find_by(id:params[:id])
    render json: review 
  end

  def destroy
    review=Review.find_by(id:params[:id])
    review.destroy
    head :no_content

  end

  def create
    review=Review.create!(review_params)
    render json: review,status: :created
  rescue ActiveRecord::RecordInvalid => e
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end



  def update
    review=Review.find_by(id:params[:id])
    review.update!(review_params)
    render json: review, status: :ok
  end

  private

  def review_params

    params.permit(:description,:unit_id,:user_id)
  end
end
