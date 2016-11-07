import React from 'react';
import { API_ADDRESS } from '../constants/Config';


const DoctorItem = ({payment_methods, languages_spoken, type_of_practice, office_managers_name, practice_website, practice_email, practice_phone, zip_code, state, city, address_2, address_1, country, practice_name, taking_patients, sex, email , designation, last_name, first_name, featured}) => {
  let des = `${designation}. ` + first_name + ' ' + last_name;
  return (
    <div className='doctor-item flex'>
      <div className='col'>
        <div className='inline featured-image'>
          <span>{featured ? <img src={`${API_ADDRESS}/media/images/Star.svg`} /> : ''}</span>
        </div>
        <div className='inline'>
          <h4><a href="#">{des}</a></h4>
            <p>{practice_name}</p>
        </div>
      </div>
      <div className='col'>
        <p>{type_of_practice}</p>
      </div>
      <div className='col'>
        {payment_methods.map(method => <p key={Math.random()} >{method}</p>)}
      </div>
      <div className='col'>
        <p><a href={`https://${practice_website}`}>{practice_website}</a></p>
        <p><a href={`mailto:${practice_email}`}>{practice_email}</a></p>
        <p>{address_1}</p>
        <p>{`${city}, ${state}, ${zip_code}`}</p>
      </div>
    </div>
  );
}

export default DoctorItem;
