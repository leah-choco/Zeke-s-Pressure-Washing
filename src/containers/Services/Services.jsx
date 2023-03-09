import React from 'react';

import './services.css';

import Service from '../../components/service/Service';

// Need to add images here to be duplicated for each service
import concrete from '../../assets/Concrete.jpg';
const Services = () => {
  return (
    <div className='services section__padding' id='services'>
      <div className='services__heading'>
        <h1>Our Services</h1>
      </div>

      <div className='services__container'>
        <Service imgUrl={concrete} text='Concrete' />
        <Service imgUrl={concrete} text='Roof Softwash' />
        <Service imgUrl={concrete} text='Woodwork' />
        <Service imgUrl={concrete} text='Gutters' />
        <Service imgUrl={concrete} text='House Wash' />

      </div>
    </div>
  )
}

export default Services