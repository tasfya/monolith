class Category < ApplicationRecord
  has_many :categorizations, dependent: :destroy
  
  # Define polymorphic relationships for different content types
  has_many :fatwas, through: :categorizations, source: :categorizable, source_type: 'Fatwa'
  has_many :articles, through: :categorizations, source: :categorizable, source_type: 'Article'
  # Add more relationships for other content types as needed
  
  validates :name, presence: true, uniqueness: true
  
  # Sort categories by their position for display
  default_scope { order(position: :asc) }
  
  # Generic method to get all categorized items of any type
  def categorized_items
    categorizations.includes(:categorizable).map(&:categorizable)
  end
  
  # Method to get all items of a specific type
  def items_of_type(type)
    categorizations.where(categorizable_type: type).includes(:categorizable).map(&:categorizable)
  end
end
