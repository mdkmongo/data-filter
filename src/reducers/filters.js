import * as types from '../constants/ActionTypes';

const initialState = {
  1: {
      value: 'Cash/Credit',
      name: 'payment_methods',
    },
  2: {
      value: 'Medicare',
      name: 'payment_methods',
    },
  3: {
      value: 'Medicaid',
      name: 'payment_methods',
    },
  4: {
      value: 'Private Insurance',
      name: 'payment_methods',
    },
  5: {
      value: 'Sliding Scale',
      name: 'payment_methods',
    },
  6: {
      value: 'english',
      name: 'languages_spoken',
    },
  7: {
      value: 'spanish',
      name: 'languages_spoken',
    },
  8: {
      value: 'yes',
      name: 'taking_patients',
    },
  9: {
      value: 'no',
      name: 'taking_patients',
    }
};

export default function filters(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}