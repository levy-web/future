class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP}
    validates :name, presence: true
    validates :password, length: {minimum: 6}

    has_secure_password
end
