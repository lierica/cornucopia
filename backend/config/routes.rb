Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :surpluses
			resources :needs
			resources :users
      resources :organizations, only: [:index]
      resources :user_surplus_need, only: [:create]
      post '/auth', to: 'authentication#create'
      get '/current_user', to: 'authentication#show'
    end
  end
end
