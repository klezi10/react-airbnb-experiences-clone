import React from 'react';
// import Zaferes from '../Images/Zaferes.png';
// import Star from '../Images/Star.png';

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.item.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className="Card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        src={props.item.coverImg}
        alt="athlete Zaferes"
        className="img-zaferes"
      />
      <div className="reviews">
        <img
          src="../Images/Star.png"
          alt="star rating"
          className="img-star-rating"
        />
        <p className="ratings">
          {props.item.stats.rating}{' '}
          <span>
            ({props.item.stats.reviewCount})·{props.item.location}
          </span>
        </p>
      </div>
      <p className="title">{props.item.title}</p>
      <p className="price-pp">
        {' '}
        <span>From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
