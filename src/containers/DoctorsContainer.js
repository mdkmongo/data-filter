import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchDoctorsIfNeeded } from '../actions/DoctorActions';
import MobileDoctors from '../components/MobileDoctors';
import Doctors from '../components/Doctors';
import { CLIENT_ID } from '../constants/Config';

import { isEmpty, find, flatten } from 'lodash';

import geolib from 'geolib';

class DoctorsContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchDoctorsIfNeeded(CLIENT_ID))
  }

  render() {
    return <Doctors {...this.props} />;
  }
}

const getFilteredListings = (listings, activeFilters, filters, location, activeKeyWordFilters, settings) => {

  let temp = locationListings(listings, location);
  temp = keyWordFilters(temp, activeKeyWordFilters, settings.filters);
  activeFilters.map((filter) => {
    if (filter) {
      temp = filterListings(temp, filters[filter])
    } 
  })
  return temp;
}

const keyWordFilters = (listings, activeKeyWordFilters, filters) => {
  if (isEmpty(activeKeyWordFilters)) {
    return listings;
  }
  let keys = Object.keys(activeKeyWordFilters);
  let res = [];

  keys.forEach((key) => {
    // find filter
    if (activeKeyWordFilters[key] == '') {
      res=listings;
    } else {
      let filts = filters.filter(filter => filter.id == key);
      filts.map((filt) => {
        filt.fields.forEach((field) => {
          let temp = listings.filter((listing) => {
            return listing[field].includes(activeKeyWordFilters[key])
          })
          res.push(temp);
        })
      })
    }
  })
  return flatten(res);
}

const filterListings = (listings, filter) => {
  return listings.filter((listing) => {
    return listing[filter.name].includes(filter.value);
  })
}

const locationListings = (listings, location) => {
  if (location.lat && location.long) {
    let radius = location.radius.value * 1609.34;
    return listings.filter((listing) => {
      return geolib.isPointInCircle(
        {latitude: listing.lat, longitude: listing.long},
        {latitude: location.lat, longitude: location.long},
        radius
      )
    })
  }
  return listings
}

function mapStateToProps(state) {
  const { authed, settings, entities, environment, navigator, doctors, activeFilters, filters, location, activeKeyWordFilters } = state;
  const { height, isMobile } = environment;
  const { query } = navigator.route;
  const { listings, loading, error } = doctors;
  const { radius, lat, long } = location;

  return {
    settings,
    authed,
    height,
    isMobile,
    listings,
    activeKeyWordFilters,
    filteredListings: getFilteredListings(listings, activeFilters.filters, filters, location, activeKeyWordFilters, settings),
  };
}

export default connect(mapStateToProps)(DoctorsContainer);