import * as types from '../constants/ActionTypes';

const initialState = {
  listings: null,
  loading: false,
  error: false,
  siteID: null,
};

export default function doctors(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_DOCTORS_REQUEST: 
      return { ...state, siteID: action.siteID }
    case types.FETCH_DOCTORS_SUCCESS:
      return { ...state, listings: action.doctors }
    default:
      return state;
  }
}