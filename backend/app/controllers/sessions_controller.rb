class SessionsController < ApplicationController

    def login
        user = User.find_by(email: params[:email])
    
        if user && user.authenticate(params[:password])
          token = encode_token(user.id, user.email, user.isAdmin)
          # token = JWT.encode({user_id: user.id, email:user.email}, ENV['task_train_key'], 'HS256')
          render json: {message:"welcome back, added session for #{user.name}!!", data:{user:user,token:token}},  status: :ok
        else
          render json: {message:"Invalid email or password"}, status: :unprocessable_entity
        end
    end

    def logout
        session.delete(:user_id)
        session[:expiry] = Time.now
        render json: {message: "succesfully logged out"}
    end
        
end
