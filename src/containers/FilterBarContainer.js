import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import FilterBar from '../components/FilterBar';

class FilterBarConainer extends Component {
  render() {
    const { isMobile } = this.props;
    const { settings } = this.props;
    if (isMobile) {
      return <MobileFilterBar {...this.props} />;
    }
    return (
      <FilterBar {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  const { settings, environment, navigator } = state;
  const { isMobile } = environment;
  const { query } = navigator.route;
  const { filters } = settings;

  return {
    filters,
    isMobile,
    query,
  }
}

export default connect(mapStateToProps)(FilterBarConainer);