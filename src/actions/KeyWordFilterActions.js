import * as types from '../constants/ActionTypes';


export function updateKeyWords(value, filter) {
  let word = value;
  let id = filter.id;
  return {
    type: types.UPDATE_KEY_WORDS,
    word,
    id,
  }
}