import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
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
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i class='fa fa-hand-scissors' />
            HENRY'S BARBERSHOP
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>


            <li className='nav-item'>
              <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>


            <li className='nav-item'>
              <Link
                to='/gallery'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>


            <li className='nav-item'>
              <Link
                to='/reviews'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Reviews
              </Link>
            </li>


            <li>
              <Link
                to='/book-now'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                BOOK NOW
              </Link>
            </li>


          </ul>
          {button && <Button buttonStyle="btn--outline">BOOK NOW</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
