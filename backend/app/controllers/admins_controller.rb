class AdminsController < ApplicationController

    def index
        render json: Admin.all
    end

    def create
        @admin = Admin.create(admin_params)
        if @admin.valid?
            render json: @admin, status: :ok
        else
            render json: {message: @admin.errors.full_messages }, status: :unprocessable_entity
        end

    end

    def destroy
        @admin = Admin.find_by(id:params[:id])
        @admin.destroy
        render json: {message: "removed from admin"}, status: :ok
    end

    private

    def admin_params
        params.permit(:user_id)
    end
end
