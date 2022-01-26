import React from 'react';
// import Zaferes from '../Images/Zaferes.png';
import Star from '../Images/Star.png';

export default function Card(props) {
  return (
    <div className="Card">
      <img src={props.img} alt="athlete Zaferes" className="img-zaferes" />
      <div className="reviews">
        <img src={Star} alt="star rating" className="img-star-rating" />
        <p className="ratings">
          {props.rating}{' '}
          <span>
            ({props.reviewCount})·{props.country}
          </span>
        </p>
      </div>
      <p className="title">{props.title}</p>
      <p className="price-pp">
        {' '}
        <span>From ${props.price}</span> / person
      </p>
    </div>
  );
}
