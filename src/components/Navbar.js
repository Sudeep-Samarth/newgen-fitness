// src/components/Navbar.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

/**
 * Navbar component with a hide-on-scroll functionality.
 * It uses a fixed position and a dynamic class to hide the navbar
 * when the user scrolls down and show it when the user scrolls up.
 */
function Navbar() {
  // State to track the last scroll position
  const [lastScrollY, setLastScrollY] = useState(0);
  // State to control the visibility of the navbar
  const [navbarVisible, setNavbarVisible] = useState(true);

  // useEffect hook to handle scroll events
  useEffect(() => {
    /**
     * Handles the scroll event to determine scroll direction
     * and update navbar visibility.
     */
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if the user is scrolling down and past a certain threshold (e.g., 50px)
      // This prevents the navbar from hiding immediately on a small scroll down
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }

      // Update the last scroll position for the next check
      setLastScrollY(currentScrollY);
    };

    // Add the scroll event listener when the component mounts
    // The { passive: true } option improves scrolling performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // The effect re-runs when lastScrollY changes

  return (
    <nav className={`navbar ${navbarVisible ? '' : 'navbar-hidden'}`}>
      <div className="navbar-brand">
        {/* Use the Link component from react-router-dom and bold the first word */}
        <Link to="/"><strong>NewGen</strong> | <span className="Fitness" style={{ fontWeight: 'bold' }}>Fitness</span></Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/calculators">Calculators</Link></li>
        <li><Link to="/ai">AI Assistant</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
