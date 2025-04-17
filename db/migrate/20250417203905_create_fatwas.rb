class CreateFatwas < ActiveRecord::Migration[8.0]
  def change
    create_table :fatwas do |t|
      t.string :title
      t.text :content
      t.string :author
      t.timestamps
    end
    add_index :fatwas, :title
  end
end
