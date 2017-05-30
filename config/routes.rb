Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'
  namespace :api, defaults: {format: :json} do
  	resources :posts do
  		resources :comments, only: [:index, :create]
  		resources :likes, only: [:index, :create]
  	end
    delete 'posts/:post_id/likes', controller: :likes, action: :destroy
  end
end
