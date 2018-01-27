class UpdateRounds2 < ActiveRecord::Migration[5.1]
  def change
    add_column :rounds, :tournament_id, :integer, null: false
  end
end
