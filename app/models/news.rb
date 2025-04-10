class News < ApplicationRecord
  validates :title, presence: true
  validates :slug, presence: true, uniqueness: true

  scope :published, -> { where("published_at <= ?", Time.current) }

  def url
    "#" #TODO: implement this
  end
end
