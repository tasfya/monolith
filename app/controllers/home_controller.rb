class HomeController < ApplicationController
  def index
    @news_items = News.published.limit(5)
  end
end
