import * as types from '../constants/ActionTypes';

const initialState = {
 filters: [
  {
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
        value: 'Private Insurance',
        label: 'Private Insurance',
      },
      {
        id: 5,
        value: 'Sliding Scale',
        label: 'Sliding Scale',
      }
    ]
  },
  {
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
  }
]
};

export default function settings(state = initialState, action) {
  switch (action.type) {
    case types.RECIEVE_FILTERS:
      return { ...state, 
        filters: action.filters
      }
    default:
      return state;
  }
}