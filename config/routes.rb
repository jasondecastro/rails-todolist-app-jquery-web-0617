Rails.application.routes.draw do
  resources :tasks
  get '/tasks/:id/fuckoff', to: 'tasks#fuckoff'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
