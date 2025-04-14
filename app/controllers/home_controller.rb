class HomeController < ApplicationController
  def index
    @podcast = Podcast.first
    @page, @episodes = pagy @podcast.episodes.most_recent_first
  end
end
