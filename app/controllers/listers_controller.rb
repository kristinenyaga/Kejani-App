class ListersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
    render json: Lister.all
  end
  def show
    lister = Lister.find_by(id: session[:lister_id])
    if lister
      render json: lister
    else
      render json: { error: "you are not authorized" }, status: :unauthorized
    end
end


  def create
    
    lister = Lister.create(lister_params)
    if lister.valid?
      session[:lister_id] = lister.id
      render json: lister, status: :created
    else
      render json: { errors: lister.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private 


  def lister_params
    params.permit(:username,:image_url,:phone_no,:password, :password_confirmation,:email)

  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
