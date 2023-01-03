Rails.application.routes.draw do
  
  resources :images
  resources :apartments
  resources :reviews
  resources :units
  resources :users
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to:  "sessions#destroy"
  get 'latest', to: 'post#latest'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
