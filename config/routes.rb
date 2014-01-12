JournalApp::Application.routes.draw do
  namespace :api do
    resources :posts, :only => [:index, :create, :show, :destroy]
  end
end
