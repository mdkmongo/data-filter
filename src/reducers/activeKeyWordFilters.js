import * as types from '../constants/ActionTypes';

const initialState = {
};

export default function activeKeyWordFilters(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_KEY_WORDS:
      return {...state, 
        [action.id]: action.word,
      }
    default:
      return state;
  }
}