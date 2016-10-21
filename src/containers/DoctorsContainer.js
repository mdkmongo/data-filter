import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchDoctorsIfNeeded } from '../actions/DoctorActions';
import MobileDoctors from '../components/MobileDoctors';
import Doctors from '../components/Doctors';
import { CLIENT_ID } from '../constants/Config';

const propTypes = {
  isMobile: PropTypes.bool,
};

class DoctorsContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchDoctorsIfNeeded(CLIENT_ID))
  }

  render() {
    const { isMobile } = this.props;
    if (isMobile) {
      return <MobileDoctors {...this.props} />;
    }

    return <Doctors {...this.props} />;
  }
}

DoctorsContainer.propTypes = propTypes;

const getFilteredListings = (listings, activeFilters, filters) => {
  let temp = listings;
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

function mapStateToProps(state) {
  const { authed, settings, entities, environment, navigator, doctors, activeFilters, filters } = state;
  const { height, isMobile } = environment;
  const { query } = navigator.route;
  const { listings } = doctors;
  const { loading } = doctors;
  const { error } = doctors;

  return {
    authed,
    height,
    isMobile,
    listings,
    filteredListings: getFilteredListings(listings, activeFilters.filters, filters)
  };
}

export default connect(mapStateToProps)(DoctorsContainer);