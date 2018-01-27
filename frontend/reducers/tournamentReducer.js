import { RECEIVE_TOURNAMENT } from '../Actions';

const _nullState = {tournament: {id: null}};

export default (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOURNAMENT:
      const tournament = action.tournament;
      return {tournament};
    default:
      return state;
  }
};
