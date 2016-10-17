import merge from 'lodash/merge';

const initialState = {
  doctors: {},
  filters: {
    1: {
      name: 'payment_methods',
      value: 'Cash/Credit',
      active: false
    },
    2: {
      name: 'payment_methods',
      value: 'Medicare',
      active: false
    },
    3: {
      name: 'payment_methods',
      value: 'Medicaid',
      active: false
    },
    4: {
      name: 'payment_methods',
      value: 'Private Insurance',
      active: false
    },
    5: {
      name: 'payment_methods',
      value: 'Sliding Scale',
      active: false
    },
    6: {
      name: 'languages_spoken',
      value: 'English',
      active: false
    },
    7: {
      name: 'languages_spoken',
      value: 'Spanish',
      active: false
    },
    8: {
      name: 'taking_patients',
      value: 'Yes',
      active: false
    },
    9: {
      name: 'taking_patients',
      value: 'No',
      active: false
    },
  }
};

export default function entities(state = initialState, action) {
  if (action.entities) {
    return merge({}, state, action.entities);
  }



  return state;
}