class Color < ApplicationRecord
    has_many :product_colors
    has_many :products, through: :product_colors

    validates :name, presence: true, uniqueness: true
end
