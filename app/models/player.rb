class Player < ApplicationRecord
  validates :name, :loses, presence: true #issue of duplicate names
  has_many :matches
end
