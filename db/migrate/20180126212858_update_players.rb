class UpdatePlayers < ActiveRecord::Migration[5.1]
  def change
    remove_column :players, :email
    add_column :players, :email, :string
  end
end
