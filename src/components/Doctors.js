import React, { Component, PropTypes } from 'react';


// import DoctorItems from '../components/DoctorItems';
import Stickify from '../components/Stickify';
import FilterBarContainer from '../containers/FilterBarContainer';

class Doctors extends Component {
  componentWillMount() {
  }

  render() {
    const {
      sticky,
    } = this.props;
    return (
      <div className={`doctors ${(sticky ? 'sticky' : '')}`} >
      <FilterBarContainer />
        <div className="container">
          Doctor Items here
        </div>
      </div>
    )
  }
}

export default Stickify(Doctors, 50);

