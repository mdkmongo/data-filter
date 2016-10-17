import React, { Component, PropTypes } from 'react';

import Select from 'react-select';


class FilterBar extends Component {

  renderContent() {
    return (
      this.props.filters.map(filter =>
        <Select
          name={filter.name}
          value={""}
          options={filter.options}
          multi={filter.type == 'Checkbox' ? true : false}
        />
      )
    )
  }
  render() {
    return (
      <div className="FilterBar">
        {this.renderContent()}
      </div>
    )
  }
}

export default FilterBar;