import * as types from '../constants/ActionTypes';

import { includes, remove, values, flatten, forEach } from 'lodash';


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
