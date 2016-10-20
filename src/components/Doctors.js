import React, { Component, PropTypes } from 'react';


import DoctorItem from '../components/DoctorItem';
import Stickify from '../components/Stickify';
import FilterBarContainer from '../containers/FilterBarContainer';
import SearchContainer from '../containers/SearchContainer';

class Doctors extends Component {
  componentWillMount() {
  }

  renderContent() {
    if (this.props.filteredListings) {
      return this.props.filteredListings.map(listing => <DoctorItem key={Math.random(1)} { ...listing }/>)
    }
    else {
      // NOTE: MAKE ERROR HELPER AND INSERT HERE
      return "We couldn't find any doctors with your selected filters."
    }
  }

  render() {
    const {
      sticky,
    } = this.props;
    return (
      <div className={`doctors ${(sticky ? 'sticky' : '')}`} >
      <FilterBarContainer />
        <div className="container">
          {this.renderContent()}
        </div>
      </div>
    )
  }
}

export default Stickify(Doctors, 50);

