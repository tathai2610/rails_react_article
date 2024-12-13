class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.text :content, null: false
      t.string :image, default: 'https://cdn.dribbble.com/users/6245075/screenshots/16269935/media/17cc5ec7251045c325392d0d5ceae910.png'

      t.timestamps
    end
  end
end
