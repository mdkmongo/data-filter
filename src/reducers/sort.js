import * as types from '../constants/ActionTypes';

const initialState = {
  sortBy: { value: 'Featured', label: 'Featured' },
}

export default function sort(state = initialState, action) {
  switch (action.type) {
    case types.SELECT_SORT:
      return { ...state, 
        sortBy: action.sortBy,
      }
    default: 
      return state;
  }
}