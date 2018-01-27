Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'application#home'

  namespace :api, defaults: {format: :json} do
    resources :tournaments, only: [:create]
    resources :players, only: [:create]
    resource :matches, only: [:update, :create]
  end
end
