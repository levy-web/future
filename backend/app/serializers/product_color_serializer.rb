class ProductColorSerializer < ActiveModel::Serializer
  attributes :id, :image_url
  belongs_to :product
  belongs_to :color
end
