class UpdateRounds3 < ActiveRecord::Migration[5.1]
  def change
    remove_column :rounds, :tournament_id
    add_column :rounds, :tournament_id, :integer
  end
end
