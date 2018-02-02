Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :surpluses
			resources :needs
			resources :users
      resources :organizations, only: [:index]
      post '/auth', to: 'authentication#create'
    end
  end
end
