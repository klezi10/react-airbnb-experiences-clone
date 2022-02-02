import React from 'react';
import './style.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
// import Zaferes from './Images/Zaferes.png';
import Data from './data';

export default function App() {
  //  <Hero />;
  const card = Data.map((item) => (
    <Card
      key={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
    />
  ));
  return (
    <div className="App">
      <Navbar />

      <section className="cards-list">{card}</section>
    </div>
  );
}
