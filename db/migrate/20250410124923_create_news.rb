class CreateNews < ActiveRecord::Migration[8.0]
  def change
    create_table :news do |t|
      t.string :title, null: false
      t.string :slug, null: false
      t.date :published_at, null: false
      t.timestamps
    end
    add_index :news, :slug, unique: true
  end
end
