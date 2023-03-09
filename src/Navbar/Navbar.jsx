import React from 'react';

import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__links'>
        <a href='#home'>Home</a>
        <a href='#mission'>Our Mission</a>
        <a href='#services'>Our Services</a>
        <a href='#gallery'>Gallery</a>
        <a href='#estimate'>Free Estimate</a>
        <a href='#contact'>Contact Us</a>
      </div>
    </div>
  )
}

export default Navbar