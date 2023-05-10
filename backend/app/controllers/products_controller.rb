class ProductsController < ApplicationController
    def index
        render json: Product.all
    end

    def create
        product = Product.create(products_params)
        if product
            render json: product
        else
            render json: {error: product.error.fullmessage}
        end

    end

    def update
    end

    def show
        product = Product.find_by(id: params[:id])
        if product
            render json: product
        else
            render json: {error:"product not found"}
        end
    end

    def delete
    end

    private

    def products_params
        params.require(:product).permit(:name, :weight, :dimensions, :material, :origin, :standards, :category_id, :image)
    end


end
