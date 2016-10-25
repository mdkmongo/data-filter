import React, { Component } from 'react';

import { GOOGLE_MAPS_API } from '../constants/Config';

import Select from 'react-select';

import fetch from 'isomorphic-fetch'

class LocationSearchContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoadingExternally: false,
      location: this.props.location,
      radius: { value: 25, label: '25 miles' },
    }
  }

  onLocationSelect = (location) => {
    this.setState({
      location: location,
    })
  }

  onRadiusChange = (radius) => {
    this.setState({
      radius: radius,
    })
  }

  rads = [
    { value: 1, label: '1 miles'},
    { value: 5, label: '5 miles'},
    { value: 10, label: '10 miles'},
    { value: 25, label: '25 miles'},
    { value: 50, label: '50 miles'},
    { value: 100, label: '100 miles'},
    { value: 200, label: '200 miles'},
  ]

  getAddress = (input) => {
    this.setState({
      isLoadingExternally: true
    })
    return fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=geocode&language=fr&key=${GOOGLE_MAPS_API}`)    
      .then((response) => {
        return response.json();
      }).then((json) => {
        this.setState({
          isLoadingExternally: false
        })
        let options = [];
        json.predictions.map((prediction) => {
          console.log(prediction)
          options.push({value: prediction.place_id, label: `${prediction.structured_formatting.main_text}, ${prediction.structured_formatting.secondary_text} ` })
        });
        return { options: options };
      });
  }

  render() {
    return (
      <div className="LocationSearchContainer flex">
        <Select.Async 
          name={'Location Search'}
          loadOptions={this.getAddress}
          isLoading={this.state.isLoadingExternally}
          onChange={this.onLocationSelect}
          value={this.state.location}
          placeholder={'Search Address'}
          clearable={false}
          />
        <Select
          name={'Location Radius'}
          options={this.rads}
          value={this.state.radius}
          onChange={this.onRadiusChange}
          searchable={false}
          clearable={false}
          placeholder={'Radius'}
        />
      </div>
    )
  }
}

export default LocationSearchContainer;