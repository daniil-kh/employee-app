import React from 'react';
import { Link } from 'react-router-dom';

import './header.style.scss';

const Header = () => (
  <div className='header-container'>
    <div className='options-container'>
      <Link className='link' to='/'>
        Home
      </Link>
      <Link className='link' to='/employees'>
        Employees
      </Link>
    </div>
  </div>
);

export default Header;
