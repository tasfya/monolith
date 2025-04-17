Rails.application.routes.draw do
  get "lessons", to: "lessons#index", as: "lessons"
  get "contact", to: "contact#index", as: "contact"
  devise_for :users, 
            path: '', 
            controllers: {
              sessions: 'sessions',
            }
  # Define your applicatiun routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :podcasts, only: :index do
    resources :episodes, only: [:index, :show]
    resources :search_results, only: :index
  end
  
  # Defines the root path route ("/")
  # root "articles#index"
  root to: "home#index"
  
  resolve "SearchResult" do |search_result|
    [search_result.podcast, search_result.episode]
  end
  # TODO protect this routes
  mount Motor::Admin => '/motor_admin'
  mount GoodJob::Engine => "good_job"
end
