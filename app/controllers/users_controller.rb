class UsersController < ApplicationController

    def create
        user = User.new(user_params);
        if user.save
            token = issue_token(user)
            render json: {user: UserSerializer.new(user), jwt:token}
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id]);
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

    private
    def user_params
        params.permit(:username, :location, :email, :password, :password_confirmation, :phone_number,:role)
    end
end
