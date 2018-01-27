import { RECEIVE_PLAYERS } from '../Actions';
import merge from 'lodash/merge';

export const _nullState = {
  all_ids: [],
  by_id: {}
};

export default (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYERS:
      return action.players;
    default:
      return state;
  }
};
