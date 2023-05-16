class FeaturesController < ApplicationController

    before_action :verify_auth, only: %i[ create destroy update]

    def index
        Render json: Feature.all
    end

    def create
        if @user[:isAdmin]
            feature = Feature.create(features_params)
            render json: feature, status: :created
        else
            render json: {error: "admin access only"}, status: :unauthorized
        end
    end

    def destroy
        if @user[:isAdmin]
        feature = Feature.find_by(id: params[:id])
        if feature
            feature.destroy
            render json: feature
        else
            render json: {error:"not found"}
        end
        else
            render json: {error: "admin access only"}, status: :unauthorized
        end
    end

    private

    def features_params
        params.permit(:faeture_name, :product_id)
    end

end
