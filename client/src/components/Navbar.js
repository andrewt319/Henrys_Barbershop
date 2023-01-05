import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to='/' className='navbar-hand-scissors-logo'>
            <i class='fa fa-hand-scissors' />
          </Link>
          <Link 
            to='home-page-link' 
            className='navbar-logo' 
            onClick={closeMobileMenu}
            smooth={true} 
            duration={1000} 
            spy={true}
            offset={-40}>
            HENRY'S BARBERSHOP
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='cards-page-link'
                className='nav-links'
                onClick={closeMobileMenu}
                smooth={true} 
                duration={1000} 
                spy={true} 
                offset={-30}
              >
                Gallery
              </Link>
            </li>


            <li className='nav-item'>
              <Link
                to='reviews-page-link'
                className='nav-links'
                smooth={true} 
                duration={1000} 
                spy={true} 
                onClick={closeMobileMenu}
                offset={-70}
              >
                Reviews
              </Link>
            </li>


            <li className='nav-item'>
              <Link
                to='book-now-page'
                className='nav-links'
                onClick={closeMobileMenu}
                smooth={true} 
                duration={1000} 
                spy={true} 
                offset={-30}
              >
                Book Now
              </Link>
            </li>

            <li className='nav-item'>
              <Link 
              to='about-us-page-link' 
              smooth={true} 
              duration={1000} 
              spy={true} 
              offset={-60}
              className='nav-links' 
              onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>


          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
