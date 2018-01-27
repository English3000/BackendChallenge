import * as Api from './utils/api';

export const RECEIVE_TOURNAMENT = 'RECEIVE_TOURNAMENT';

export const receiveTournament = tournament => ({
  type: RECEIVE_TOURNAMENT,
  tournament
});

export const createTournament = tournament => async (dispatch) => dispatch(
  receiveTournament( await Api.createTournament(tournament) )
);


export const RECEIVE_MATCHES = 'RECEIVE_MATCHES';
export const UPDATE_MATCH = 'UPDATE_MATCH';

export const receiveMatches = matches => ({
  type: RECEIVE_MATCHES,
  matches
});
export const patchMatch = match => ({
  type: UPDATE_MATCH,
  match
});

export const createMatches = (players, current_round) => async (dispatch) => dispatch(
  receiveMatches( await Api.createMatches(players, current_round) )
);
export const updateMatch = match => async (dispatch) => dispatch(
  patchMatch( await Api.updateMatch(match) )
);


export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS';

export const receivePlayers = players => ({
  type: RECEIVE_PLAYERS,
  players
});

export const createPlayers = (players, tournament_id) => dispatch => (
  Api.createPlayers(players, tournament_id)
    .then(allPlayers => dispatch(receivePlayers(allPlayers)))
);
