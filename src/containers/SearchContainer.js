import React, { Component } from 'react';
import Button from '../components/Button';

import { connect } from 'react-redux';

import Select from 'react-select';

class SearchContainer extends Component {

  constructor(props) {
    super(props)
    this.state= {
      selected: this.props.selected,
    }
  }
  onSelect = (val) => {
    this.setState({
      selected: val
    })
    this.props.handleChange(this.props.name, val);
  }

  handleClick = () => {

  }
  render() {
    const { usStates } = this.props;

    return (
      <div className="space">
        <div className="wrap">
          <Select 
            name={'State Select'}
            value={this.state.selected}
            options={usStates}
            multi={true}
            onChange={this.onSelect}
            searchable={true}
          />
        </div>
        <div className="wrap">
          <Button
            text={'Show Filters'}
            onClick={this.handleClick} 
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { settings, environment, navigator } = state;
  const { isMobile } = environment;
  const { query } = navigator.route;
  const { usStates } = settings;

  return {
    usStates,
    isMobile,
    query,
  }
}

export default connect(mapStateToProps)(SearchContainer);