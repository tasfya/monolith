class AddPositionDescriptionToCategory < ActiveRecord::Migration[8.0]
  def change
    add_column :categories, :position, :integer
    add_column :categories, :description, :text
  end
end
