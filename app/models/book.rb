class Book < ApplicationRecord
  has_one_attached :cover
  has_one_attached :file
end
