class UpdateMatches < ActiveRecord::Migration[5.1]
  def change
    add_column :matches, :round_id, :integer
  end
end
