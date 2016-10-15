import * as types from '../constants/ActionTypes';

const filters = [
  {
    name: 'Payment Methods',
    type: 'Checkbox',
    options: [
      {
        value: 'Cash/Credit',
        label: 'Cash/Credit',
      },
      {
        value: 'Medicare',
        label: 'Medicare',
      },
      {
        value: 'Medicaid',
        label: 'Medicaid',
      },
      {
        value: 'Private insurance',
        label: 'Private insurance',
      },
      {
        value: 'Sliding scale',
        label: 'Sliding scale',
      }
    ]
  },
  {
    name: 'Languages Spoken',
    type: 'Select',
    options: [
      {
        value: 'english',
        label: 'English',
      },
      {
        value: 'spanish',
        label: 'Spanish',
      }
    ]
  },
  {
    name: 'Taking Patients',
    type: 'Select',
    options: [
      {
        value: 'yes',
        label: 'Yes',
      },
      {
        value: 'no',
        label: 'No',
      }
    ]
  }
]

function fetchFilters() {
  let filt = filters;
  return dispatch => {
    dispatch(recieveFilters(filt));
  }
}

function recieveFilters(filters) {
  return {
    type: types.RECIEVE_FILTERS,
    filters,
  }
}


export function initSettings() {
  return dispatch => {
    dispatch(fetchFilters());
  }
}
