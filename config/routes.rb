Rails.application.routes.draw do
  devise_for :users
  root to: "tasks#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :tasks, only: [:create, :edit, :update, :destroy] do
    collection do
      get :destroy_done
    end
  end
end
