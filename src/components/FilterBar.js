import React, { Component, PropTypes } from 'react';

import SelectContainer from '../containers/SelectContainer';
import Button from '../components/Button';

import { toggleFilters } from '../actions/FilterActions';
import { clearFilters } from '../actions/FilterActions';

class FilterBar extends Component {

  activeFilters = {};

  handleChange = (name, values) => {
    this.props.handleChange(name,values);
  }

  handleClick = () => {
    const { dispatch } = this.props;
    dispatch(toggleFilters());
  }

  clearFilters = () => {
    const { dispatch } = this.props;
    dispatch(clearFilters());
  }

  renderStateFilter() {
    const { usStates } = this.props
    return (
      <SelectContainer
        name={'State'}
        options={usStates}
        multi={true}
        handleChange={this.handleChange}
        clearable={true}
        searchable={true}
      />
    )
  }

  renderToggleButton() {
    return (
      <Button
        text={this.props.filtersVisible ? 'Show Less Filters' : 'Show More Filters'}
        onClick={this.handleClick}
      />
    )
  }

  renderClearFiltersButton() {
    return (
      <Button
        text={'Clear Filters'}
        onClick={this.clearFilters}
      />
    )
  }

  renderCustomFilters() {
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
        <div className="statesFilter">
          {this.renderStateFilter()}
          <div className="filterToggleButton">
            {this.renderToggleButton()}
          </div>
        </div>
        <div className="customFilters" style={{display: (this.props.filtersVisible ? 'flex' : 'none')}}>
          {this.renderCustomFilters()}
        </div>
      </div>
    )
  }
}

export default FilterBar;