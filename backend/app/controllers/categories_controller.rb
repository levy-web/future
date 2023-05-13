class CategoriesController < ApplicationController

    before_action :verify_auth, only: %i[ create destroy update]

    def index
        render json: Category.all
    end

    def show
        category = Category.find_by(name: params[:name])
        if category
            render json: category
        else
            render json: {error:"category not found"}
        end
    end

    def create
        category = Category.create(categories_params)
        if category
            render json: category
        else
            render json: {error: category.error.fullmessage}
        end
    end

    private

    def categories_params
        params.permit(:name, :protected_area)
    end
end
