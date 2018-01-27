class CreateMatches < ActiveRecord::Migration[5.1]
  def change
    create_table :matches do |t|
      t.integer :player1_id, null: false
      t.integer :player2_id, null: false
      t.boolean :finished?, null: false, default: false
      t.string :score
      t.integer :loser_id

      t.timestamps
    end
  end
end
