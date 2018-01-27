json.by_id do
  @players.each do |player|
    json.set! player.id do
      json.id player.id
      json.name player.name
      json.loses player.loses #misspelled
    end
  end
end

json.all_ids do
  json.array! @players.pluck(:id)
end
