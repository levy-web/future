Rails.application.routes.draw do
  resources :features
  resources :products
  # resources :categories
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/categories', to: 'categories#index'
  get '/categories/:name', to: 'categories#show'
  post '/categories', to: 'categories#create'

  get '/colors', to: 'colors#index'
  post '/colors', to: 'colors#create'

  post '/prod-colors', to: 'product_colors#create'
end
