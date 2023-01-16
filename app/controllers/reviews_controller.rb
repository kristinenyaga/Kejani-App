class ReviewsController < ApplicationController

  # def index
  #   reviews=Review.all
  #   render json: reviews
  # end

  # def show
  #   review = Review.find_by(id:params[:id])
  #   render json: review 
  # end

  # def destroy
  #   review=Review.find_by(id:params[:id])
  #   review.destroy
  #   head :no_content

  # end

  # def create
  #   review=Review.create!(review_params)
  #   render json: review,status: :created
  # end


  # def update
  #   review=Review.find_by(id:params[:id])
  #   review.update!(review_params)
  #   render json: review, status: :ok
  # end

  # private

  # def review_params

  #   params.permit(:description,:unit_id,:user_id)
  # end

  before_action :set_review, only: [:show, :update, :destroy]

  # GET /reviews
  def index
    @reviews = Review.where(user_id: @user.id)

    render json: @reviews
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  # POST /reviews
  def create
    @review = Review.new(review_params)
    @review.user_id = @user.id

    if @review.save
      render json: @review, status: :created, location: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    @review.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def review_params
      params.require(:review).permit(:description,:unit_id,:user_id)
    end


end
