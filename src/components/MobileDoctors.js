import React, { Component, PropTypes } from 'react';


// import DoctorItems from '../components/DoctorItems';
// import FilterBar from '../components/FilterBar';

class MobileDoctors extends Component {
  componentWillMount() {
    const { dispatch, filters } = this.props;
  }

  render() {
    const {
      authed,
      dispatch,
      height,
      filters,
      sticky,
      doctors,
    } = this.props;

    return (
      <div>
        MOBILE DOCTOR LIST
      </div>
    )
  }
}

export default MobileDoctors;

