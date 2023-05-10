class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :weight, :origin, :dimensions, :standards, :image_url
  has_many :product_colors
  belongs_to :category

end
