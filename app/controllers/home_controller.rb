class HomeController < ApplicationController
  def index
    @podcast = Podcast.first
    @categories = Category.all
    @episode = @podcast.episodes.most_recent_first.first
    @page, @episodes = pagy @podcast.episodes.most_recent_first
  end
end
