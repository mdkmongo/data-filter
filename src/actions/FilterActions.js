import * as types from '../constants/ActionTypes';

import { values, flatten } from 'lodash';


function updateFilters(filters) {
  return {
    type: types.UPDATE_FILTERS,
    filters,
  }
}

export default function parseFilters(filters) {
  return dispatch => {
    dispatch(updateFilters(flatten(values(filters))));
  }
}

export function toggleFilters() {
  return {
    type: types.TOGGLE_FILTERS
  }
}