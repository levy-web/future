class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.boolean :isAdmin, default:false
      t.string :password_digest

      t.timestamps
    end
  end
end
