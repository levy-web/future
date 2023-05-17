class ProductColorsController < ApplicationController

    before_action :verify_auth, only: %i[ create destroy update]

    def create
        if @user[:isAdmin]
        prodColor = ProductColor.create(prod_color_params)
            if prodColor.valid?
                render json: prodColor, status: :created
            else
                render json: {error: prodColor.errors.full_messages}, status: :unprocessable_entity
            end
        else
            render json: {error: "admin access only"}, status: :unauthorized
        end
    end

    private

    def prod_color_params
        params.require(:product_color).permit(:product_id, :color_id, :image)
    end
end
