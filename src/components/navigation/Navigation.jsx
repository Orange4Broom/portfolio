import React, { useEffect, useState } from 'react';
import './navigation.scss';

function Navigation() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigationStyle = {
    backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.57)' : 'transparent',
    transition: 'background-color 0.4s ease',
  };

  return (
    <nav className='nav' style={navigationStyle}>
      <a href="#" className='nav-logo'>
        <img src="/images/logo.svg" alt="logo" className='nav-logo-img' />
      </a>
      <ul className='nav-list'>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">My work</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
