import React, { Component, PropTypes } from 'react';

import SelectContainer from '../containers/SelectContainer';

import { isArray } from 'lodash';


class FilterBar extends Component {

  activeFilters=[]; 

  handleChange = (name, values) => {
    this.activeFilters[name] = values
  }

  renderContent() {
    return (
      this.props.filters.map(filter =>
        <SelectContainer
          name={filter.name}
          options={filter.options}
          multi={filter.type == 'Checkbox' ? true : false}
          handleChange={this.handleChange}
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