class Category < ApplicationRecord
  has_many :categorizations, dependent: :destroy
  
  has_many :fatwas, through: :categorizations, source: :categorizable, source_type: 'Fatwa'
  has_many :books, through: :categorizations, source: :categorizable, source_type: 'Book'
  
  validates :name, presence: true, uniqueness: true
  
  default_scope { order(position: :asc) }
  
  def categorized_items
    categorizations.includes(:categorizable).map(&:categorizable)
  end
  
  # Method to get all items of a specific type
  def items_of_type(type)
    categorizations.where(categorizable_type: type).includes(:categorizable).map(&:categorizable)
  end
end
