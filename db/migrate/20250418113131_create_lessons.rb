class CreateLessons < ActiveRecord::Migration[8.0]
  def change
    create_table :lessens do |t|
      t.string :title
      t.string :subtitle
      t.text :content

      t.timestamps
    end
  end
end
