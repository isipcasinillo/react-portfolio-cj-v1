import React, { useState, useEffet } from 'react';
import './Header.css'
import navItemList from '../../utils/navitems';
import { FaBars } from 'react-icons/fa'
function Header() {

  function toggleNav() {
    document.querySelector('.nav-dropdown').classList.toggle('hidden')
  }

  return (
    <>
      <nav className='navlist'>
        <div className='nav-logo'>MS1</div>
        <ul className='nav-ul'>
          {navItemList.map((navItem) => (
            <li className='navItem-li' key={navItem.href}><a href={navItem.href}>{navItem.name}</a></li>
          ))}
        </ul>
        <FaBars onClick={toggleNav} className='FaBars' />
      </nav>
      <div className='nav-dropdown hidden'>
        <ul onClick={toggleNav}>
          {navItemList.map((navItem) => (
            <li className='navItem-li' key={navItem.href}><a href={navItem.href}>{navItem.name}</a></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Header;
