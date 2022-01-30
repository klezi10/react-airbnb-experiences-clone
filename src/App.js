import React from 'react';
import './style.css';
import Navbar from './Components/Navbar';
// import Hero from './Components/Hero';
import Card from './Components/Card';
// import Zaferes from './Images/Zaferes.png';
import Data from './data';

export default function App() {
  // <Hero />;
  const infoData = Data.map((pieceData) => (
    <Card
      img={pieceData.coverImg}
      rating={pieceData.stats.rating}
      reviewCount={pieceData.stats.reviewCount}
      location={pieceData.location}
      title={pieceData.title}
      price={pieceData.price}
    />
  ));
  return (
    <div className="App">
      <Navbar />
      {infoData}
    </div>
  );
}
