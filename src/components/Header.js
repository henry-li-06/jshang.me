import React from 'react';
import './../styles/header.css';

const Header = () => {
  return (
    <div id='header'>
      <h1>Hi, I'm Jin!</h1>
      <h4>
        <span>I'm a product designer currently studying at</span>
        <span style={{ color: 'red' }}> Cornell University 🐻</span>
      </h4>
      <h4>
        Exploring the intersection between psychology 🧠, technology 💻, and
        creativity 🎨.
      </h4>
    </div>
  );
};

export default Header;
