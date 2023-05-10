class ProductColorsController < ApplicationController
    def create
        prodColor = ProductColor.create(prod_color_params)
        if prodColor
            render json: prodColor
        else
            render json: {error: prodColor.error.fullmessage}
        end
    end

    private

    def prod_color_params
        params.require(:product_color).permit(:product_id, :color_id, :image)
    end
end
