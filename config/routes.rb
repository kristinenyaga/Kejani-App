Rails.application.routes.draw do
  
  resources :requestunits
  resources :images
  resources :apartments
  resources :reviews
  resources :units
  resources :users
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get '/profile', to: 'users#profile'
  delete "/logout", to:  "sessions#destroy"
  post '/auto_login', to: 'auth#auto_login'
  get 'latest', to: 'post#latest'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
