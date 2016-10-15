import React, { Component, PropTypes } from 'react';


// import DoctorItems from '../components/DoctorItems';
import Stickify from '../components/Stickify';
// import FilterBar from '../components/FilterBar';

class Doctors extends Component {
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
      <div className={`doctors ${(sticky ? 'sticky' : '')}`} >
        <div className="container">
          Doctor Items here
        </div>
      </div>
    )
  }
}

export default Stickify(Doctors, 50);

