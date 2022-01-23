import React from 'react';
import Zaferes from '../Images/Zaferes.png';
import Star from '../Images/Star.png';

export default function Card() {
  return (
    <div className="Card">
      <img src={Zaferes} alt="athlete Zaferes" className="img-zaferes" />
      <div className="reviews">
        <img src={Star} alt="star rating" className="img-star-rating" />
        <p className="ratings">
          5.0 <span>(6)·USA</span>
        </p>
      </div>
      <p className="title">Life lessons with Katie Zaferes</p>
      <p className="price-pp">
        {' '}
        From $136 <span>/ person</span>
      </p>
    </div>
  );
}
