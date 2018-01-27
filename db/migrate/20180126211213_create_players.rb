class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.integer :loses, default: 0

      t.timestamps
    end
  end
end
