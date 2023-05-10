class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :weight
      t.string :dimensions
      t.string :material
      t.string :origin
      t.string :standards
      t.integer :category_id

      t.timestamps
    end
  end
end
