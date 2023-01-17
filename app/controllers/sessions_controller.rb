
class SessionsController < ApplicationController
  def create
      user = User.find_by(email:params[:email])

      if user && user.authenticate(params[:password])
          token = issue_token(user)
          render json: {user: UserSerializer.new(user), token: token}
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
  def auto_login
    @token = params[:token]
    # byebug
    user = User.find(JWT.decode(@token, jwt_key, true, algorithm: 'HS256')[0]["user_id"])
    render json: user
  end

  private
  def session_params
      params.permit(:email, :password)
  end
end