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
],
  usStates: [
  {
    "id": 10,
    "value": "Alabama",
    "label": "Alabama"
  },
  {
    "id": 11,
    "value": "Alaska",
    "label": "Alaska"
  },
  {
    "id": 12,
    "value": "American Samoa",
    "label": "American Samoa"
  },
  {
    "id": 13,
    "value": "Arizona",
    "label": "Arizona"
  },
  {
    "id": 14,
    "value": "Arkansas",
    "label": "Arkansas"
  },
  {
    "id": 15,
    "value": "California",
    "label": "California"
  },
  {
    "id": 16,
    "value": "Colorado",
    "label": "Colorado"
  },
  {
    "id": 17,
    "value": "Connecticut",
    "label": "Connecticut"
  },
  {
    "id": 18,
    "value": "Delaware",
    "label": "Delaware"
  },
  {
    "id": 19,
    "value": "District Of Columbia",
    "label": "District Of Columbia"
  },
  {
    "id": 20,
    "value": "Federated States Of Micronesia",
    "label": "Federated States Of Micronesia"
  },
  {
    "id": 21,
    "value": "Florida",
    "label": "Florida"
  },
  {
    "id": 22,
    "value": "Georgia",
    "label": "Georgia"
  },
  {
    "id": 23,
    "value": "Guam",
    "label": "Guam"
  },
  {
    "id": 24,
    "value": "Hawaii",
    "label": "Hawaii"
  },
  {
    "id": 25,
    "value": "Idaho",
    "label": "Idaho"
  },
  {
    "id": 26,
    "value": "Illinois",
    "label": "Illinois"
  },
  {
    "id": 27,
    "value": "Indiana",
    "label": "Indiana"
  },
  {
    "id": 28,
    "value": "Iowa",
    "label": "Iowa"
  },
  {
    "id": 29,
    "value": "Kansas",
    "label": "Kansas"
  },
  {
    "id": 30,
    "value": "Kentucky",
    "label": "Kentucky"
  },
  {
    "id": 31,
    "value": "Louisiana",
    "label": "Louisiana"
  },
  {
    "id": 32,
    "value": "Maine",
    "label": "Maine"
  },
  {
    "id": 33,
    "value": "Marshall Islands",
    "label": "Marshall Islands"
  },
  {
    "id": 34,
    "value": "Maryland",
    "label": "Maryland"
  },
  {
    "id": 35,
    "value": "Massachusetts",
    "label": "Massachusetts"
  },
  {
    "id": 36,
    "value": "Michigan",
    "label": "Michigan"
  },
  {
    "id": 37,
    "value": "Minnesota",
    "label": "Minnesota"
  },
  {
    "id": 38,
    "value": "Mississippi",
    "label": "Mississippi"
  },
  {
    "id": 39,
    "value": "Missouri",
    "label": "Missouri"
  },
  {
    "id": 40,
    "value": "Montana",
    "label": "Montana"
  },
  {
    "id": 41,
    "value": "Nebraska",
    "label": "Nebraska"
  },
  {
    "id": 42,
    "value": "Nevada",
    "label": "Nevada"
  },
  {
    "id": 43,
    "value": "New Hampshire",
    "label": "New Hampshire"
  },
  {
    "id": 44,
    "value": "New Jersey",
    "label": "New Jersey"
  },
  {
    "id": 45,
    "value": "New Mexico",
    "label": "New Mexico"
  },
  {
    "id": 46,
    "value": "New York",
    "label": "New York"
  },
  {
    "id": 47,
    "value": "North Carolina",
    "label": "North Carolina"
  },
  {
    "id": 48,
    "value": "North Dakota",
    "label": "North Dakota"
  },
  {
    "id": 49,
    "value": "Northern Mariana Islands",
    "label": "Northern Mariana Islands"
  },
  {
    "id": 50,
    "value": "Ohio",
    "label": "Ohio"
  },
  {
    "id": 51,
    "value": "Oklahoma",
    "label": "Oklahoma"
  },
  {
    "id": 52,
    "value": "Oregon",
    "label": "Oregon"
  },
  {
    "id": 53,
    "value": "Palau",
    "label": "Palau"
  },
  {
    "id": 54,
    "value": "Pennsylvania",
    "label": "Pennsylvania"
  },
  {
    "id": 55,
    "value": "Puerto Rico",
    "label": "Puerto Rico"
  },
  {
    "id": 56,
    "value": "Rhode Island",
    "label": "Rhode Island"
  },
  {
    "id": 57,
    "value": "South Carolina",
    "label": "South Carolina"
  },
  {
    "id": 58,
    "value": "South Dakota",
    "label": "South Dakota"
  },
  {
    "id": 59,
    "value": "Tennessee",
    "label": "Tennessee"
  },
  {
    "id": 60,
    "value": "Texas",
    "label": "Texas"
  },
  {
    "id": 61,
    "value": "Utah",
    "label": "Utah"
  },
  {
    "id": 62,
    "value": "Vermont",
    "label": "Vermont"
  },
  {
    "id": 63,
    "value": "Virgin Islands",
    "label": "Virgin Islands"
  },
  {
    "id": 64,
    "value": "Virginia",
    "label": "Virginia"
  },
  {
    "id": 65,
    "value": "Washington",
    "label": "Washington"
  },
  {
    "id": 66,
    "value": "West Virginia",
    "label": "West Virginia"
  },
  {
    "id": 67,
    "value": "Wisconsin",
    "label": "Wisconsin"
  },
  {
    "id": 68,
    "value": "Wyoming",
    "label": "Wyoming"
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