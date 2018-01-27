import { combineReducers } from 'redux';
import tournamentReducer from './tournamentReducer';
import playersReducer from './playersReducer';
import matchesReducer from './matchesReducer';
// import errorsReducer from './errorsReducer';
// import loadingReducer from './loadingReducer';

export default combineReducers({
  tournament: tournamentReducer,
  players: playersReducer,
  matches: matchesReducer
  // errors: errorsReducer,
  // ui: loadingReducer
});
