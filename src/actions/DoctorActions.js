import * as types from '../constants/ActionTypes';

import fetch from 'isomorphic-fetch'

import CLIENT_ID from '../constants/Config';



export default function fetchDoctorsRequest(siteID) {
  return {
    type: types.FETCH_DOCTORS_REQUEST,
    siteID,
  }
}

function fetchDoctorsSuccess(json) {
  return {
    type: types.FETCH_DOCTORS_SUCCESS,
    doctors: json,
  }
}

export function fetchDoctors(siteID) {

  return dispatch => {

    dispatch(fetchDoctorsRequest(siteID))

    return fetch(`http://ec2-35-162-31-26.us-west-2.compute.amazonaws.com:3000/api/listings?siteId=${siteID}`)
      .then(response => response.json())
      .then(json => 
        dispatch(fetchDoctorsSuccess(json))
      )
  }
}

function shouldFetchDoctors(state, siteID) {
  const listings = state.doctors.listings
  if (!listings) {
    return true
  } else if (doctors.isFetching) {
    return false
  } else {
    return doctors.didInvalidate
  }
}

export function fetchDoctorsIfNeeded(siteID) {

  return (dispatch, getState) => {
    if (shouldFetchDoctors(getState(), siteID)) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchDoctors(siteID))
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}

export function filterDoctorsStart() {
  return {
    type: types.FILTER_DOCTORS_START,
  }
}

export function filterDoctorsFinish() {
  return {
    type: types.FILTER_DOCTORS_FINISH,
  }
}