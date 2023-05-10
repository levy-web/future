class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :protected_area
  has_many :products
end
