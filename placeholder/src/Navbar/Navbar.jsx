import React from 'react';

import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__links'>
        <p><a href='#home'>Home</a></p>
        <p><a href='#mission'>Our Mission</a></p>
        <p><a href='#services'>Our Services</a></p>
        <p><a href='#gallery'>Gallery</a></p>
        <p><a href='#estimate'>Free Estimate</a></p>
        <p><a href='#contact'>Contact Us</a></p>

      </div>
    </div>
  )
}

export default Navbar