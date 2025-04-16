class ApplicationController < ActionController::Base
  before_action :news
  before_action :podcast

  def news 
    @news_items = News.published.limit(5)
  end

  def podcast
    @podcast = Podcast.last
  end
end
