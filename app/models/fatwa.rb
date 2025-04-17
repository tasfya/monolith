class Fatwa < ApplicationRecord
  belongs_to :category, polymorphic: true
  
  validates :title, presence: true
  validates :category, presence: true
  
  default_scope { order(created_at: :desc) }
end
