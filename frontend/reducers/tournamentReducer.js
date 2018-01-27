import { RECEIVE_TOURNAMENT } from '../Actions';

const _nullState = {id: null};

export default (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOURNAMENT:
      return action.tournament;
    default:
      return state;
  }
};
