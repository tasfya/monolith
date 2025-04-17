class Categorization < ApplicationRecord
  belongs_to :category
  belongs_to :categorizable, polymorphic: true
  
  validates :category_id, uniqueness: { scope: [:categorizable_type, :categorizable_id] }
end
