
class SessionsController < ApplicationController
    skip_before_action :authorized,only: [:create]
    def create
        @user = User.find_by(email:sessions_params[:email])

        if @user && @user.authenticate(sessions_params[:password])
            token = encode_token(user_id: @user.id)
            render json: {user: UserSerializer.new(@user), jwt: token},status: :ok
        else
            render json: {error: "Incorrect email or password."}
        end
    end

    def show
        if logged_in?
            render json: current_user
        else
            render json: {error: "User is not logged in/could not be found."}
        end

    end
    #   def auto_login
    #     @token = params[:token]
    #     # byebug
    #     user = User.find(JWT.decode(@token, jwt_key, true, algorithm: 'HS256')[0]["user_id"])
    #     render json: user
    #   end

    private
    def sessions_params
        params.require(:user).permit(:email, :password)
    end
end