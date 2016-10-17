import React, { Component, PropTypes } from 'react';

import SelectContainer from '../containers/SelectContainer';

import parseFilters from '../actions/FilterActions';

import { includes, remove, values, flatten, forEach } from 'lodash';


class FilterBar extends Component {

  activeFilters = {};

  // resetFilters() {
  //   forEach(this.filters, (value) => value.active = false);
  //   console.log(this.filters)
  // }
  // updateFilters() {
  //   let toUpdate = flatten(values(this.activeFilters));

  //   if (toUpdate.length > 0) {
  //     toUpdate.map((val) => {
  //       if (val) {
  //         this.filters[val].active = true;
  //       }
  //     })
  //   }
  // }

  handleChange = (name, values) => {
    const { dispatch } = this.props;
    // console.log(values);
    if (values.length > 0) {
      this.activeFilters[name] = values.map(val => val.id)
    } else {
      this.activeFilters[name] = values.id;
    }
    dispatch(parseFilters(this.activeFilters));
  }

  renderContent() {
    return (
      this.props.filters.map(filter =>
        <SelectContainer
          key={filter.name}
          name={filter.name}
          options={filter.options}
          multi={filter.type == 'Checkbox' ? true : false}
          handleChange={this.handleChange}
          clearable={false}
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