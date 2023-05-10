class ProductColor < ApplicationRecord
    belongs_to :color
    belongs_to :product

    has_one_attached :image

    def image_url 
        Rails.application.routes.url_helpers.url_for(image) if image.attached?        
    end
end
