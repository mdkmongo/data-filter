import * as types from '../constants/ActionTypes';

const initialState = {
  token: null,
  doctorId: null,
  siteId: [],
}

export default function authed(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_ACCESS_TOKEN:
      return {...state,
        token: action.token,
      };

    default: 
      return state;
  }
}