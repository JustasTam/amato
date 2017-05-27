Rails.application.routes.draw do
  get 'user/index', as: 'user'

  root 'welcome#index'
end
