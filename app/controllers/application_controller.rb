class ApplicationController < ActionController::Base
  before_action :news

  def news 
    @news_items = News.published.limit(5)
  end

  def podcast
    @podcast = Podcast.last 
  end
end
