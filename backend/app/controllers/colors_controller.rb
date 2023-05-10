class ColorsController < ApplicationController
    def index
        render json: Color.all
    end

    def create
        color = Color.create(color_params)
        byebug
        if color
            render json: color
        else
            render json: {error: color.error.fullmessage}
        end
        
    end

    private

    def color_params
        params.permit(:name)
    end

end
