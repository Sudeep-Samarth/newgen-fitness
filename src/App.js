// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//image
import locationImage from './images/location.png';
import infoImage from './images/info.png';
import personImage from './images/person.png';
// Placeholder components
const HomePage = () => (
  <>
    <header className="hero-section">
      <div className="hero-content-top-left">
        <h1>Built for the Unbreakable.</h1>
        <p>The tools for your transformation. Built to perform.</p>
      </div>
      <div className="hero-cta-button">
        <a href="/products" className="cta-button">Explore</a>
        <div className="scroll-arrow">&darr;</div>
      </div>
      {/* Trademark element added to the bottom right of the hero section with a TM symbol */}
      <div className="trademark">NewGen<span className="trademark-symbol">TM</span></div>
    </header>

    <section className="info-cards-section">
      <div className="info-card">
        <img src={infoImage} alt="Overview" className="card-image card-image-info" />
        <h2>Overview</h2>
        <p><span className="comma">"</span> NewGen Fitness serves your needs for all types of fitness products from pre-workout supplements to equipments. <span className="comma">"</span></p>
      </div>
      
      <div className="info-card">
        <img src={personImage} alt="What Our Customers Say" className="card-image" />
        <h2>What Our Customers Say</h2>
        <p><span className="comma">"</span> NewGen has completely transformed my workouts! The quality of their gear is unmatched, and I've seen incredible progress since I started using their products. I highly recommend them to anyone serious about their fitness. - John D. <span className="comma">"</span></p>
      </div>
      
      <div className="info-card">
        <img src={locationImage} alt="Headquarters Location" className="card-image" />
        <h2>Headquarters</h2>
        <p id="address"><span className="comma">"</span> Skybay Hubtown, Breach Candy, Mumbai, Maharashtra 400026, India <span className="comma">"</span></p>
      </div>
    </section>

    {/* New section for best sellers */}
    <section>
        <h2 style={{ fontSize: '2rem', color: '#333', textAlign: 'center', marginTop: '4rem' }}>
            <strong>Our Best Sellers...</strong>
        </h2>
    </section>

    {/* New section for product cards */}
    <section className="product-cards-section">
        <div className="product-card">
            <img src="https://placehold.co/300x300/e9e9e9/777777?text=Product+1" alt="Best Seller 1" className="product-image dumbell" />
        </div>
        <div className="product-card">
            <img src="https://placehold.co/300x300/e9e9e9/777777?text=Product+2" alt="Best Seller 2" className="product-image" />
        </div>
        <div className="product-card">
            <img src="https://placehold.co/300x300/e9e9e9/777777?text=Product+3" alt="Best Seller 3" className="product-image" />
        </div>
    </section>
  </>
);

const ProductsPage = () => <h2>Products Page</h2>;
const CalculatorsPage = () => <h2>Calculators Page</h2>;
const AiPage = () => <h2>AI Assistant Page</h2>;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/calculators" element={<CalculatorsPage />} />
          <Route path="/ai" element={<AiPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
