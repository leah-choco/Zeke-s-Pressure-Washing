import React from 'react';

import './service.css';

const Service = ({ imgUrl, text }) => (
  <div className="service__component">
    <div className="service__component-image">
      <img src={imgUrl} alt="service_image" />
    </div>
    <div className="service__component_-content">
      <div>
        <h3>{text}</h3>
      </div>
      <p>Learn More</p>
      </div>
  </div>
  );


export default Service