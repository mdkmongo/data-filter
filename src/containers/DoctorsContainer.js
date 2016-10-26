import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchDoctorsIfNeeded } from '../actions/DoctorActions';
import MobileDoctors from '../components/MobileDoctors';
import Doctors from '../components/Doctors';
import { CLIENT_ID } from '../constants/Config';

import geolib from 'geolib';

const propTypes = {
  isMobile: PropTypes.bool,
};

class DoctorsContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchDoctorsIfNeeded(CLIENT_ID))
  }

  render() {
    return <Doctors {...this.props} />;
  }
}

DoctorsContainer.propTypes = propTypes;

const getFilteredListings = (listings, activeFilters, filters, location) => {

  let temp = locationListings(listings, location);
  activeFilters.map((filter) => {
    if (filter) {
      temp = filterListings(temp, filters[filter])
    } 
  })
  return temp;
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
  const { authed, settings, entities, environment, navigator, doctors, activeFilters, filters, location } = state;
  const { height, isMobile } = environment;
  const { query } = navigator.route;
  const { listings } = doctors;
  const { loading } = doctors;
  const { error } = doctors;
  const { radius } = location;
  const { lat } = location;
  const { long } = location;

  return {
    authed,
    height,
    isMobile,
    listings,
    filteredListings: getFilteredListings(listings, activeFilters.filters, filters, location),
  };
}

export default connect(mapStateToProps)(DoctorsContainer);