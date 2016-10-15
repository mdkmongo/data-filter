import * as types from '../constants/ActionTypes';

const initialState = {
  accessToken: null,
  doctorId: null,
  siteId: [],
}

export default function authed(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_ACCESS_TOKEN:
      return {...state,
        accessToken: action.accessToken,
      };

    case types.RECEIVE_AUTHED_USER:
      return { ...state,
        user: action.user,
      };

    case types.RESET_AUTHED:
      return initialState;

    default: 
      return state;
  }
}