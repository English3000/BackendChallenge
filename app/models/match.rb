class Match < ApplicationRecord
  validates :player1_id, :player2_id, presence: true
  validates :finished?, inclusion: [true, false]

  has_many :players
end
