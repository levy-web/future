class FeaturesController < ApplicationController
    def index
        Render json: Feature.all
    end

    def create
        feature = Feature.create(features_params)
        render json: feature
    end

    def destroy
        feature = Feature.find_by(id: params[:id])
        if feature
            feature.destroy
            render json: feature
        else
            render json: {error:"not found"}
        end
    end

    private

    def features_params
        params.permit(:faeture_name, :product_id)
    end

end
