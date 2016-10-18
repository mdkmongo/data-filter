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
    },
  "10": {
    "value": "Alabama",
    "name": "state"
  },
  "11": {
    "value": "Alaska",
    "name": "state"
  },
  "12": {
    "value": "American Samoa",
    "name": "state"
  },
  "13": {
    "value": "Arizona",
    "name": "state"
  },
  "14": {
    "value": "Arkansas",
    "name": "state"
  },
  "15": {
    "value": "California",
    "name": "state"
  },
  "16": {
    "value": "Colorado",
    "name": "state"
  },
  "17": {
    "value": "Connecticut",
    "name": "state"
  },
  "18": {
    "value": "Delaware",
    "name": "state"
  },
  "19": {
    "value": "District Of Columbia",
    "name": "state"
  },
  "20": {
    "value": "Federated States Of Micronesia",
    "name": "state"
  },
  "21": {
    "value": "Florida",
    "name": "state"
  },
  "22": {
    "value": "Georgia",
    "name": "state"
  },
  "23": {
    "value": "Guam",
    "name": "state"
  },
  "24": {
    "value": "Hawaii",
    "name": "state"
  },
  "25": {
    "value": "Idaho",
    "name": "state"
  },
  "26": {
    "value": "Illinois",
    "name": "state"
  },
  "27": {
    "value": "Indiana",
    "name": "state"
  },
  "28": {
    "value": "Iowa",
    "name": "state"
  },
  "29": {
    "value": "Kansas",
    "name": "state"
  },
  "30": {
    "value": "Kentucky",
    "name": "state"
  },
  "31": {
    "value": "Louisiana",
    "name": "state"
  },
  "32": {
    "value": "Maine",
    "name": "state"
  },
  "33": {
    "value": "Marshall Islands",
    "name": "state"
  },
  "34": {
    "value": "Maryland",
    "name": "state"
  },
  "35": {
    "value": "Massachusetts",
    "name": "state"
  },
  "36": {
    "value": "Michigan",
    "name": "state"
  },
  "37": {
    "value": "Minnesota",
    "name": "state"
  },
  "38": {
    "value": "Mississippi",
    "name": "state"
  },
  "39": {
    "value": "Missouri",
    "name": "state"
  },
  "40": {
    "value": "Montana",
    "name": "state"
  },
  "41": {
    "value": "Nebraska",
    "name": "state"
  },
  "42": {
    "value": "Nevada",
    "name": "state"
  },
  "43": {
    "value": "New Hampshire",
    "name": "state"
  },
  "44": {
    "value": "New Jersey",
    "name": "state"
  },
  "45": {
    "value": "New Mexico",
    "name": "state"
  },
  "46": {
    "value": "New York",
    "name": "state"
  },
  "47": {
    "value": "North Carolina",
    "name": "state"
  },
  "48": {
    "value": "North Dakota",
    "name": "state"
  },
  "49": {
    "value": "Northern Mariana Islands",
    "name": "state"
  },
  "50": {
    "value": "Ohio",
    "name": "state"
  },
  "51": {
    "value": "Oklahoma",
    "name": "state"
  },
  "52": {
    "value": "Oregon",
    "name": "state"
  },
  "53": {
    "value": "Palau",
    "name": "state"
  },
  "54": {
    "value": "Pennsylvania",
    "name": "state"
  },
  "55": {
    "value": "Puerto Rico",
    "name": "state"
  },
  "56": {
    "value": "Rhode Island",
    "name": "state"
  },
  "57": {
    "value": "South Carolina",
    "name": "state"
  },
  "58": {
    "value": "South Dakota",
    "name": "state"
  },
  "59": {
    "value": "Tennessee",
    "name": "state"
  },
  "60": {
    "value": "Texas",
    "name": "state"
  },
  "61": {
    "value": "Utah",
    "name": "state"
  },
  "62": {
    "value": "Vermont",
    "name": "state"
  },
  "63": {
    "value": "Virgin Islands",
    "name": "state"
  },
  "64": {
    "value": "Virginia",
    "name": "state"
  },
  "65": {
    "value": "Washington",
    "name": "state"
  },
  "66": {
    "value": "West Virginia",
    "name": "state"
  },
  "67": {
    "value": "Wisconsin",
    "name": "state"
  },
  "68": {
    "value": "Wyoming",
    "name": "state"
  }
};

export default function filters(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}