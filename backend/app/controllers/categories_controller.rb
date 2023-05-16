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
        if @user[:isAdmin]
            category = Category.create(categories_params)
            if category.valid?
                render json: category
            else
                render json: {error: category.errors.full_messages}, status: :unprocessable_entity
            end
        else
            render json: {error: "admin access only"}, status: :unauthorized
        end
    end

    private

    def categories_params
        params.permit(:name, :protected_area)
    end
end
