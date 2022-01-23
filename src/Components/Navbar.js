import React from 'react';
import Airbnb from '../Images/airbnb.png';

export default function Navbar() {
  return (
    <nav className="Navbar">
      <img src={Airbnb} alt="logo" className="logo" />
    </nav>
  );
}
