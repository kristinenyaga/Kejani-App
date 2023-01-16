# class SessionsController < ApplicationController
#     def create

#         user = User.find_by(email: params[:email]);
#         if user&.authenticate(params[:password])
#             session[:user_id] = user.id
#             render json: user
#         else
#             render json: { errors: ["Invalid username or password"] }, status: :unauthorized
#         end
#     end

#     def destroy
#         if(session.include? :user_id)
#             session.delete :user_id
#         render json: {message: "Huyu jambazi ametolewa"}
#         else
#             render json: {errors: ["Not authorized"]}, status: :unauthorized
#         end
#     end


# end


