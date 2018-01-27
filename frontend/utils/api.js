export const createTournament = tournament => $.ajax({
  method: 'POST',
  url: 'api/tournaments',
  data: {tournament}
});

export const createPlayers = (players, tournament_id) => $.ajax({
  method: 'POST',
  url: 'api/players',
  data: {players, tournament_id}
});

export const createMatches = (players, round_id) => $.ajax({
  method: 'POST',
  url: 'api/matches',
  data: {players, round_id}
});
export const updateMatch = match => $.ajax({
  method: 'PATCH',
  url: 'api/matches',
  data: {match}
});

// export const createRound = roundNumber => $.ajax({
//   method: 'POST',
//   url: 'api/rounds',
//   data: roundNumber
// });
