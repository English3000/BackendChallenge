import { RECEIVE_MATCHES, UPDATE_MATCH } from '../Actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MATCHES:
      return action.matches;
    case UPDATE_MATCH:
      let newState = merge({}, state);
      newState[action.match.id] = action.match;
      return newState;
    default:
      return state;
  }
};
