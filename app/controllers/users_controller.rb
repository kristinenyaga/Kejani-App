class UsersController < ApplicationController
  # skip_before_action :authorized, only: [:create]
 
  def create
    user = User.new(user_params)
   
    if user.save
      token=issue_token(user)
      render json: { user: user, status: :created,jwt:token}
    else
      if user.errors.messages
        render json: {error: user.errors.messages}
      else
      render json: { error: 'failed to create user', status: :not_acceptable}
    end
  end
  end

  def show
    user = User.find_by(email: params[:email]);
    if user
        render json: user, status: :created
    else
        render json: { error: "Not authorized" }, status: :unauthorized
    end
end

  
  def index
      user=User.all
      render json: user
  end

  def profile
      render json: @user
  end

  private
  def user_params
      params.permit(:username, :location, :email,:password_confirmation, :password,:phone_number,:role)
  end
end