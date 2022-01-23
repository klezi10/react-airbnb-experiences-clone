import React from 'react';
import './style.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />;
      <Card />
    </div>
  );
}
