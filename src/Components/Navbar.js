import React from 'react';
import Airbnb from '../Images/airbnb.png';

export default function Navbar() {
  return (
    <div className="Navbar">
      <img src={Airbnb} alt="logo" className="logo" />
    </div>
  );
}
