class AdminsController < ApplicationController
    before_action :verify_auth, only: %i[index create destroy update]

    def index
        if @user[:isAdmin]
            render json: Admin.all
        else
            render json: {error: "admin access only"}, status: :unauthorized
        end
    end

    def create
        if @user[:isAdmin]
        @admin = Admin.create(admin_params)
        if @admin.valid?
            render json: @admin, status: :ok
        else
            render json: {message: @admin.errors.full_messages }, status: :unprocessable_entity
        end
        else
            render json: {error: "admin access only"}, status: :unauthorized
        end

    end

    def destroy
        if @user[:isAdmin]
            @admin = Admin.find_by(id:params[:id])
            @admin.destroy
            render json: {message: "removed from admin"}, status: :ok
        else
            render json: {error: "admin access only"}, status: :unauthorized
        end
    end

    private

    def admin_params
        params.permit(:user_id)
    end
end
