class CreateCategorizations < ActiveRecord::Migration[8.0]
  def change
    create_table :categorizations do |t|
      t.references :category, null: false, foreign_key: true
      t.references :categorizable, polymorphic: true, null: false

      t.timestamps
    end
    add_index :categorizations, [:category_id, :categorizable_type, :categorizable_id], name: 'index_categorizations_composite'

  end
end
