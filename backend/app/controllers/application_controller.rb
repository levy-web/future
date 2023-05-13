class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from StandardError, with: :standard_error

    def app_response(message: 'success', status: 200, data: nil)
        render json: {
            message: message,
            data: data
        }, status: status
    end

    def encode_token(uid, email, type)
        payload = {
            data:{
                uid: uid,
                email: email,
                isAdmin: type #add user type to payload
            },
            exp: Time.now.to_i + (0.5*3600)
        }
        JWT.encode(payload, ENV['SECRET_KEY'], 'HS256')
    end

    def decode(token)
        JWT.decode(token, ENV['SECRET_KEY'], true, { algorithm: 'HS256' })
    end

    # verify authorization headers
    def verify_auth
        auth_headers = request.headers['Authorization']
        if !auth_headers
            app_response(message: 'failed', status: 401, data: { info: 'Your request is not authorized.' })
        else
            token = auth_headers.split(' ')[1]            
            save_user_id(token)
        end
    end

    def save_user_id(token)
        @user = {uid:decode(token)[0]["data"]["uid"].to_i, 
            isAdmin:decode(token)[0]["data"]["isAdmin"]}
    end

    private

    def standard_error(exception)
        app_response(message: 'failed', data: { info: exception.message }, status: :unprocessable_entity)
    end

end
