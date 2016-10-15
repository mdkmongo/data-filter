export default filters = [
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