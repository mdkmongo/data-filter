import React, { Component, PropTypes } from 'react';



export default class DoctorsHeader extends Component {

  renderHeaders() {
  }
  
  render() {
    return (
      <div className="doctorsHeader">
        <div className="half">
          <p>{`${this.props.count} Doctors matched your search`}</p>
        </div>
        <div className="half">
          <div className="flex">
            <div className="col">
              <p>Type of Practice</p>
            </div>
            <div className="col">
              <p>Payment Options</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}