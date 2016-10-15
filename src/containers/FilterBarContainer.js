import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class FilterBarConainer extends Component {
  render() {
    const { isMobile } = this.props;
    if (isMobile) {
      return <MobileFilters {...this.props} />;
    }
    return <Filters {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { filters, environment, navigator } = state;
  const { isMobile } = environment;
  const { query } = navigator.route;

  return {
    filters,
    isMobile,
    query,
  }
}

export default connect(mapStateToProps)(FilterBarConainer);