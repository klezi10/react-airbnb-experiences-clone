import React from 'react';
import Group from '../Images/Group.png';

export default function Hero() {
  return (
    <div className="Hero">
      <img src={Group} alt="grid of random images" className="img-group" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
