Rails.application.routes.draw do
  
  resources :users
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to:  "sessions#destroy"

  get "/me", to: "listers#show"
  post '/signup', to: 'listers#create'
  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#create"
  resources :listers
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
