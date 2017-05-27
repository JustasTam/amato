Rails.application.routes.draw do
  get 'mechanik/index'

  get 'garden/index'

  get 'food/index'

  get 'stroikes/index'

  get 'hair/index'

  get 'clothes/index'
  get 'school/index', as: 'school'
  get 'user/index', as: 'user'

  root 'welcome#index'
end
