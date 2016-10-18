import React from 'react';


const DoctorItem = ({payment_methods, languages_spoken, type_of_practice, office_managers_name, practice_website, practice_email, practice_phone, zip_code, state, city, address_2, address_1, country, practice_name, taking_patients, sex, email , designation, last_name, first_name}) => {
  return (
    <div className='doctor-item'>
      <div className='half'>
        <h4>{first_name + ' ' + last_name}</h4>
        <h5>{practice_name}</h5>
        <div className='lower'>
          <div className='half'>
            <p>{address_1}</p>
            <p>{address_2}</p>
          </div>
          <div className='half'>
            <p>{practice_phone}</p>
            <p>{practice_website}</p>
          </div>
        </div>
      </div>
      <div className='half'>
        <div className='cols'>
          <span>{type_of_practice}</span>
          <span>{payment_methods}</span>
        </div>
      </div>
    </div>
  );
}

export default DoctorItem;
