class Api::PlayersController < ApplicationController
  def create
    player_names = params[:players][:playersString].split(",")
    tourna_id = params[:players][:tournament_id]

    @players = []

    # create all tournament players
    player_names.each do |name|
      @players.push( Player.create(name: name,
                                   tournament_id: tourna_id) )
    end

    render :index
  end

  private
  def player_names
    params.require(:players).permit(:playersString, :tournament_id)
  end
end
