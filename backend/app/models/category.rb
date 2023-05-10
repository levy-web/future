class Category < ApplicationRecord
    has_many :products

    validates :name, presence: true, uniqueness: true
    validates :protected_area, presence: :true
end
