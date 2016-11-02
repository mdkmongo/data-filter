import * as types from '../constants/ActionTypes';

const filters = [
  {
    id: 1,
    name: 'Payment Methods',
    type: 'Checkbox',
    options: [
      {
        id: 1,
        value: 'Cash/Credit',
        label: 'Cash/Credit',
      },
      {
        id: 2,
        value: 'Medicare',
        label: 'Medicare',
      },
      {
        id: 3,
        value: 'Medicaid',
        label: 'Medicaid',
      },
      {
        id: 4,
        value: 'Private insurance',
        label: 'Private insurance',
      },
      {
        id: 5,
        value: 'Sliding scale',
        label: 'Sliding scale',
      }
    ]
  },
  {
    id: 2,
    name: 'Languages Spoken',
    type: 'Select',
    options: [
      {
        id: 6,
        value: 'english',
        label: 'English',
      },
      {
        id: 7,
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
        id: 8,
        value: 'yes',
        label: 'Yes',
      },
      {
        id: 9,
        value: 'no',
        label: 'No',
      }
    ]
  },
  {
    id: 4,
    name: 'Doctor or Practice Search',
    type: 'Keyword',
    fields: ['first_name', 'last_name', 'practice_name'],
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
