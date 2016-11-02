import * as types from '../constants/ActionTypes';

export function selectSortBy(sortBy) {
  return {
    type: types.SELECT_SORT,
    sortBy,
  }
}