import * as types from '../constants/ActionTypes';

const initialState = {
  isMobile: false,
  height: null,
  width: null,
};

export default function environment(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_IS_MOBILE:
      return { ...state,
        isMobile: action.isMobile,
      };

    case types.CHANGE_WIDTH_AND_HEIGHT:
      return { ...state,
        height: action.height,
        width: action.width,
      };

    default:
      return state;
  }
}