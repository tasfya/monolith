class Fatwa < ApplicationRecord
  has_many :categorizations, as: :categorizable, dependent: :destroy
  has_many :categories, through: :categorizations
  
  validates :title, presence: true
  
  # Default scope to order by newest first
  default_scope { order(created_at: :desc) }
  
  # Method to add this item to a category
  def add_to_category(category)
    categories << category unless categories.include?(category)
  end
  
  # Method to remove this item from a category
  def remove_from_category(category)
    categories.delete(category)
  end
end
