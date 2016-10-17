import React, { Component } from 'react';

import Select from 'react-select';

class SelectContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: this.props.selected,
    }
  }

  onSelect = (val) => {
    this.setState({
      selected: val
    })
    this.props.handleChange(this.props.name, val);
  }
  render() {
    return (
      <Select { ...this.props } value={this.state.selected} onChange={this.onSelect} />
    )
  }
}

export default SelectContainer;