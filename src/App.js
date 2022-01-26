import React from 'react';
import './style.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import Zaferes from './Images/Zaferes.png';

export default function App() {
  // <Hero />;
  return (
    <div className="App">
      <Navbar />

      <Card
        img={Zaferes}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
