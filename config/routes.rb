Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root 'homepage#index'

  namespace :api do
    namespace :v1 do
      # resources :articles, only: %i[index show create destroy]

      get 'articles/index'
      post 'articles/create'
      get '/show/:id', to: 'articles#show'
      delete '/destroy/:id', to: 'articles#destroy'
    end
  end

  get '/*path' => 'homepage#index'
end
