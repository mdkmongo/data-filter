import React from 'react';


const Header = ({subhead, head}) => {
  return (
    <div className='header'>
      <h1>{head}</h1>
      <h2>{subhead}</h2>
    </div>
  );
}

export default Header;
