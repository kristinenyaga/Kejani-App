Rails.application.routes.draw do
  
  resources :auths
  resources :requestunits
  resources :images
  resources :apartments
  resources :reviews
  resources :units
  resources :users
  # resource :users, only: [:create]

  post "/signup", to: "users#create"
  # post "/login", to: "sessions#create"
  # get "/me", to: "auths#show"
  # delete "/logout", to:  "sessions#destroy"

  # post "/users", to: "users#create"
  # get "/me", to: "users#me"
  # post "/auth/login", to: "auth#login"
  post 'login', to: 'users#login'
  get '/me', to: 'users#token_authenticate'

  
  # post "/login", to: "users#login"
  get "/auto_login", to: "users#auto_login"

  get 'latest', to: 'post#latest'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
