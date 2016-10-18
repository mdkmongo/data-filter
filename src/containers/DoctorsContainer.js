import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchDoctorsIfNeeded } from '../actions/DoctorActions';
import MobileDoctors from '../components/MobileDoctors';
import Doctors from '../components/Doctors';
import { CLIENT_ID } from '../constants/Config';
console.log(CLIENT_ID);


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

function mapStateToProps(state) {
  const { authed, settings, entities, environment, navigator } = state;
  const { height, isMobile } = environment;
  const { query } = navigator.route;
  const { filters } = settings;

  return {
    authed,
    height,
    isMobile,
    // doctors,
  };
}

export default connect(mapStateToProps)(DoctorsContainer);