class AddFavoriteToImages < ActiveRecord::Migration[5.2]
  def change
    add_column :images, :favorites, :integer
  end
end
