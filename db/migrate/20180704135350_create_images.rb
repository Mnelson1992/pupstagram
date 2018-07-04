class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :imageURL
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end
