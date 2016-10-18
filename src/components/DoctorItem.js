import React from 'react';


const DoctorItem = ({payment_methods, languages_spoken, type_of_practice, office_managers_name, practice_website, practice_email, practice_phone, zip_code, state, city, address_2, address_1, country, practice_name, taking_patients, sex, email , designation, last_name, first_name}) => {
  return (
    <div className='doctor-item flex'>
      <div className='half'>
        <h4>{first_name + ' ' + last_name}</h4>
        <h5>{practice_name}</h5>
        <div className='flex space'>
          <div className='half'>
            <p>{address_1}</p>
            <p>{address_2}</p>
          </div>
          <div className='half'>
            <p>{practice_phone}</p>
            <p><a href={`https://${practice_website}`}>{practice_website}</a></p>
          </div>
        </div>
      </div>
      <div className='half space'>
        <div className='cols'>
          <p>{type_of_practice}</p>
          <p>{payment_methods}</p>
        </div>
      </div>
    </div>
  );
}

export default DoctorItem;
