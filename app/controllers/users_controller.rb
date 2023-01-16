class UsersController < ApplicationController

    # def create
    #     user = User.create(user_params);
    #     if user.valid?
    #         session[:user_id] = user.id;
    #         render json:user, status: :created
    #     else
    #         render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    #     end
    # end

    # def show
    #     user = User.find_by(id: session[:user_id]);
    #     if user
    #         render json: user, status: :created
    #     else
    #         render json: { error: "Not authorized" }, status: :unauthorized
    #     end
    # end

    # def index
    #     user=User.all
    #     render json: user
    # end

    # private
    # def user_params
    #     params.permit(:username, :location, :email, :password, :password_confirmation, :phone_number,:role)
    # end


    
    before_action :authorized, only: [:auto_login]

    def create
        @user = User.create(user_params)
        if @user.valid?
          token = encode_token({user_id: @user.id})
          render json: {user: @user, token: token}
        else
          render json: {error: "Invalid username or password"}
        end
      end

    def me 
        render json: current_user, status: :ok
    end
      
        # LOGGING IN
        def login
          @user = User.find_by(email: params[:email])
      
          if @user && @user.authenticate(params[:password])
            token = encode_token({user_id: @user.id})
            render json: {user: @user, token: token}
          else
            render json: {error: "Invalid username or password"}
          end
        end

        def token_authenticate
            token = request.headers["authenticate"]
            user = User.find(decode(token)["user_id"])
            render json: user
        end

        
      
        def auto_login
          render json: @user
        end
      
        private
      
        def user_params
          params.permit(:username, :location, :email, :password, :password_confirmation, :phone_number,:role)
        end

        def handle_invalid_record(e)
            render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
        end
      
      end
