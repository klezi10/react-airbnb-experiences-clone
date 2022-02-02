import React from 'react';
import './style.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
// import Zaferes from './Images/Zaferes.png';
import Data from './data';

export default function App() {
  //  <Hero />;
  const card = Data.map((item) => <Card key={item.id} item={item} />);
  return (
    <div className="App">
      <Navbar />

      <section className="cards-list">{card}</section>
    </div>
  );
}
