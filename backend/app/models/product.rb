class Product < ApplicationRecord
    belongs_to :category
    has_many :features
    has_many :product_colors
    has_many :colors, through: :product_colors

    has_one_attached :image

    validates :name, presence: true, uniqueness: true

    def image_url
        Rails.application.routes.url_helpers.url_for(image) if image.attached?        
    end
end
