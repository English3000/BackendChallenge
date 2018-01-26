import { combineReducers } from 'redux';
// import sessionReducer from './sessionReducer';
import errorsReducer from './errorsReducer';
// import loadingReducer from './loadingReducer';

export default combineReducers({
  // session: sessionReducer,
  errors: errorsReducer,
  // ui: loadingReducer
});
