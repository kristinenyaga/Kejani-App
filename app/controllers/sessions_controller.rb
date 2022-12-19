class SessionsController < ApplicationController
  def create
    lister = Lister.find_by(email: params[:email])
    if(lister&.authenticate(params[:password]))
        session[:lister_id] = lister.id
        render json: lister, status: :created
    else
        render json: {errors: ["invalid password"]}, status: :unauthorized
    end
end

def destroy
    if(session.include? :lister_id)
        session.delete :lister_id
        head :no_content
        render json: {message: "you are not logged out"}, status: 204
    else
        render json: {errors: ["you are not logged in"]}, status: :unauthorized
    end
end

end
