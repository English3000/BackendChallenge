class CreateRounds < ActiveRecord::Migration[5.1]
  def change
    create_table :rounds do |t|
      t.integer :matches, array: true, default: []

      t.timestamps
    end
  end
end
