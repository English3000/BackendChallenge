class Api::MatchesController < ApplicationController
  def update
    #Find winner & loser by name, match by players
      #--definitely a better way to implement this, possibly w/o db queries
      #yeah, just get from state on frontend... REFACTOR!
    winner = Player.find_by(name: params[:matches][:winner])
    loser = Player.find_by(name: params[:matches][:loser])
    match = Match.find_by(player1_id: winner.id, player2_id: loser.id) ||
             Match.find_by(player1_id: loser.id, player2_id: winner.id)

    #Update db w/ results
    loser.update_attributes(loses: loser.loses + 1)
    @match = match.update_attributes(loser_id: loser.id, finished?: true,
                                     score: params[:matches][:score])

    render json: @match
  end

  def create
    players = params[:matches][:players] #an array of objects
    tourna_id = players.first.tournament_id
    round_id = params[:matches][:current_round]

    players.shuffle!

    # create first round of matches
    num_to_play = num_playing(players)
    @matches = {}
    (num_to_play/2).times do
      match = Match.create(player1_id: players_to_match.unshift.id,
                           player2_id: players_to_match.unshift.id,
                           round_id: round_id, tournament_id: tourna_id)
      @matches[match.id] = match
    end

    Round.create(matches: @matches.pluck(:id),
                 round_number: round_id,
                 tournament_id: tourna_id)

    render json: @matches
  end

  private
  def match_params
    params.require(:matches).permit(:players, :winner, :loser, :score, :current_round)
  end

  def num_playing(players)
    playing = 2

    until playing > players.length
      playing *= 2
    end

    playing / 2
  end
end
