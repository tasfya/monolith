class HomeController < ApplicationController
  def index
    @news_items = News.published.limit(5)
    @podcast = Podcast.first
    @page, @episodes = pagy @podcast.episodes.most_recent_first

  end
end
