class UsersController < ApplicationController

    before_action :verify_auth, only: %i[ destroy ]
    before_action :set_user, only: %i[ update destroy ]

    def index
        render json: User.all
    end

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

    # def update
    #     byebug
    #     @user.update(isAdmin: true)
    #     byebug
    #     render json: {message:"succesful added user as admin", user: @user}, status: :ok
    # end

    def show
        @user = User.find_by(email: params[:email])
        if @user
            render json: @user, status: :ok
        else
            render json: {message:"user not found"}, status: :unprocessable_entity
        end
    end

    private

    def set_user
        @user = User.find(params[:id])
        unless @user
            render json: {message:"user not found"}, status: :unprocessable_entity
        end
    end

    def user_params
        params.permit(:name, :email, :password)
    end

    def admin_params
        params.require(:user).permit( :isAdmin)
    end

end
