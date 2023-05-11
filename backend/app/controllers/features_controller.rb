class FeaturesController < ApplicationController
    def index
        Render json: Feature.all
    end

    def create
        feature = Feature.create(features_params)
        render json: feature
    end

    private

    def features_params
        params.permit(:faeture_name, :product_id)
    end

end
