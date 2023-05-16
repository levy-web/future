class ColorsController < ApplicationController

    before_action :verify_auth, only: %i[ create destroy update]

    def index
        render json: Color.all
    end

    def create
        if @user[:isAdmin]
        color = Color.create(color_params)
        if color.valid?
            render json: color, status: :created
        else
            render json: {message: color.errors.full_messages}, status: :unprocessable_entity
        end
        else
            render json: {error: "admin access only"}, status: :unauthorized
        end
    end

    private

    def color_params
        params.permit(:name)
    end

end
