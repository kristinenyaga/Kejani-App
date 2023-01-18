class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]
   
    def create
      user = User.create!(user_params)
     
      if user.valid?
        token=encode_token(user_id:user.id)
        render json: { user: UserSerializer.new(user),jwt:token}, status: :created
      else
        render json: { error: 'failed to create user'}, status: :unprocessable_entity
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
