class CreateFatwas < ActiveRecord::Migration[8.0]
  def change
    create_table :fatwas do |t|
      t.string :title
      t.text :content
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
