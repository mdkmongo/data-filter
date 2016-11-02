import React from 'react';


const Input = ({value, onChange, placeholder}) => {
  return (
    <div className='button'>
      <input onChange={onChange} placeholder={placeholder ? placeholder : ''} value={value} />
    </div>
  );
}

export default Input;
