# class ApplicationController < ActionController::API
#     before_action :authorized
#     def encode_token(payload)
#         JWT.encode(payload, 'my_s3cr3t3')
#     end
#     def auth_header
#         request.headers['Authorization']
#     end
#     def decoded_token
#         if auth_header
#             token = auth_header.split(' ')[1]
#             begin
#                 JWT.decode(token, 'my_s3cr3t3', true, algorithm: 'HS256')
#             rescue 
#                 nil
#             end
#         end
#     end
 
    

#     def current_user
#         if decoded_token
#             user_id = decoded_token[0]['user_id']
#             @user= User.find_by(id:user_id)
#         end
        
#     end

#     def logged_in?
#         !!current_user
#     end
#     def authorized
#         if logged_in?
#             true
#         else 
#             render json: {message: "Please log in"}, status: :unauthorized
#         end
#     end
# end
    
class ApplicationController < ActionController::API
    before_action :authorized
    def encode_token(payload)
        JWT.encode(payload, 'hellomars1211')
    end
    def decoded_token
        header = request.headers['Authorization']
        if header
            token = header.split(" ")[1]
            begin
                JWT.decode(token, 'hellomars1211', true, algorithm: 'HS256')
            rescue JWT::DecodeError
                nil
            end
        end
    end
    def authenticate_user
        header = request.headers["Authorization"]
        token = header.split(' ').last if header
        begin
            @decoded = JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')[0]
            @user = User.find_by(id: @decoded['user_id'])
        rescue 
            render json: { errors: 'Invalid or absent token!'  }, status: :unauthorized
        end
    end

    def current_user
        if decoded_token
            user_id = decoded_token[0]['user_id']
            @user = User.find_by(id: user_id)
        end
    end
    def authorized
        unless !!current_user
        render json: { message: 'Please log in' }, status: :unauthorized
        end
    end
end
        