import React, { Component, PropTypes } from 'react';

const DoctorCount = ({count}) => {
  return (
    <div className="DoctorCount">
      <p>{count} doctors matching your search</p>
    </div>
  )
}

export default DoctorCount;