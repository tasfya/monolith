class Fatwa < ApplicationRecord
  has_many :categorizations, as: :categorizable, dependent: :destroy
  has_many :categories, through: :categorizations
  
  validates :title, presence: true
  
  default_scope { order(created_at: :desc) }
  
  def add_to_category(category)
    categories << category unless categories.include?(category)
  end
  
  def remove_from_category(category)
    categories.delete(category)
  end
end
