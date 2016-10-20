import * as types from '../constants/ActionTypes';

const initialState = {
  filtersVisible: false,
}

export default function filterUI(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_FILTERS: 
      return { ...state, 
        filtersVisible: !state.filtersVisible,
      }
    default:
      return state;
  }
}