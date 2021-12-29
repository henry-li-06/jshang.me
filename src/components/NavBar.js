import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import './../styles/navbar.css';

const NavBar = ({ currentPage }) => {
  let location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <div id='nav-bar'>
      <span className='nav-bar-link'>
        <Link
          style={{ color: location.pathname === '/' ? 'darkgrey' : 'grey' }}
          to='/'
        >
          Work
        </Link>
      </span>
      <span className='nav-bar-link'>
        <Link
          style={{
            color: location.pathname === '/about' ? 'darkgrey' : 'grey',
          }}
          to='/about'
        >
          About
        </Link>
      </span>
      <span className='nav-bar-link'>
        <a
          style={{ textDecoration: 'none', color: 'grey' }}
          href='https://7fb0b032-c268-49aa-b8ed-92135feea152.filesusr.com/ugd/e87752_eeb568058c12437aab0df9bb8f8e2d48.pdf'
          target='_blank'
        >
          Resume
        </a>
      </span>
    </div>
  );
};

export default NavBar;
