class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :isAdmin
end
