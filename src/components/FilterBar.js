import React, { Component, PropTypes } from 'react';

import SelectContainer from '../containers/SelectContainer';

import parseFilters from '../actions/FilterActions';

import { includes, remove, values, flatten, forEach } from 'lodash';


class FilterBar extends Component {

  activeFilters = {};

  handleChange = (name, values) => {
    const { dispatch } = this.props;
    if (values.length > 0) {
      this.activeFilters[name] = values.map(val => val.id)
    } else {
      this.activeFilters[name] = values.id;
    }
    dispatch(parseFilters(this.activeFilters));
  }

  renderContent() {
    const { filters } = this.props;
    return (
      filters.map(filter =>
        <SelectContainer
          key={filter.name}
          name={filter.name}
          options={filter.options}
          multi={filter.type == 'Checkbox' ? true : false}
          handleChange={this.handleChange}
          clearable={false}
          searchable={filter.type == 'Checkbox' ? true : false}
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