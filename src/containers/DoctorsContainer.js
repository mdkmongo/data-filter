import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { fetchDoctorsIfNeeded } from '../actions/DoctorActions';
import MobileDoctors from '../components/MobileDoctors';
import Doctors from '../components/Doctors';

const propTypes = {
  isMobile: PropTypes.bool,
};

class DoctorsContainer extends Component {
  render() {
    const { isMobile } = this.props;
    if (isMobile) {
      return <MobileDoctors {...this.props} />;
    }

    return <Doctors {...this.props} />;
  }
}

DoctorsContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const { authed, entities, environment, navigator } = state;
  const { height, isMobile } = environment;
  // const { doctors } = entities;
  const { query } = navigator.route;

  let filters = query && query.q ? query.q : 'location';

  return {
    filters,
    authed,
    height,
    isMobile,
    // doctors,
  };
}

export default connect(mapStateToProps)(DoctorsContainer);