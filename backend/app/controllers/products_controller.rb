class ProductsController < ApplicationController

    before_action :verify_auth, only: %i[ create destroy update]

    def index
        render json: Product.all
    end

    def create
        if @user[:isAdmin]
            product = Product.create(products_params)
            if product
                render json: product, status: :created
            else
                render json: {error: product.errors.full_messages}, status: :unprocessable_entity
            end
        else
            render json: {error: "admin access only"}, status: :unauthorized
        end

    end

    def update
        if @user[:isAdmin]
        else
            render json: {error: "admin access only"}, status: :unauthorized
        end
    end

    def show
        product = Product.find_by(id: params[:id])
        if product
            render json: product
        else
            render json: {error:"product not found"}
        end
    end

    def destroy
        if @user[:isAdmin]
            product = Product.find_by(id: params[:id])
            if product
                product.destroy
                render json: {message: "#{product.name} deleted successfully"}
            else
                render json: {error:"not found"}
            end

        else
            render json: {error: "admin access only"}, status: :unauthorized
        end
    end

    private

    def products_params
        params.require(:product).permit(:name, :weight, :dimensions, :material, :origin, :standards, :category_id, :image)
    end


end
