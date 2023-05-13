class UsersController < ApplicationController
    def create
        if params[:confirm_password] == user_params[:password]
            user = User.create(user_params)
            if user.valid?
                render json: user, status: :created
            else
                render json: {message: user.errors.full_messages }, status: :unprocessable_entity
            end

        else
            render json: {message:"password confirmation failed"}, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:name, :email, :password)
    end
end
