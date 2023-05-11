class CreateFeatures < ActiveRecord::Migration[7.0]
  def change
    create_table :features do |t|
      t.string :faeture_name
      t.integer :product_id

      t.timestamps
    end
  end
end
