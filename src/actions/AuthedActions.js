import * as types from '../constants/ActionTypes';
import Cookies from 'js-cookie';
import CLIENT_ID from '../constants/Config';

const COOKIE_PATH = 'accessToken';

function authUser(accessToken) {
  return dispatch =>
    dispatch(fetchAuthedUser(accessToken));
}

function fetchAuthedUser(accessToken) {
  // NEED TO FETCH FOR API LOGIN by accessToken
  // return dispatch =>
  //   fetch(`//api.soundcloud.com/me?oauth_token=${accessToken}`)
  //     .then(response => response.json())
  //     .then(json => dispatch(receiveAuthedUserPre(accessToken, json)))
  //     .catch(err => { throw err; });
}

export function initAuth() {
  return dispatch => {
    const accessToken = Cookies.get(COOKIE_PATH);
    if (accessToken) {
      return dispatch(authUser(accessToken, false));
    }
    return null;
  };
}

export function loginUser() {
  return dispatch => {
    // Fetch API LOGIN CALL
  };
}

export function logoutUser() {
  // return (dispatch, getState) => {
  //   Cookies.remove(COOKIE_PATH);
  //   const { authed, entities, navigator } = getState();
  //   const { path } = navigator.route;
  //   const playlists = authed.playlists.map((playlistId) =>
  //     entities.playlists[playlistId].title + AUTHED_PLAYLIST_SUFFIX
  //   );

  //   clearInterval(streamInterval);

  //   if (path[0] === 'me') {
  //     dispatch(navigateTo({ path: ['songs'] }));
  //   }

  //   return dispatch(resetAuthed(playlists));
  // };
}

function receiveAccessToken(accessToken) {
  return {
    type: types.RECEIVE_ACCESS_TOKEN,
    accessToken,
  };
}