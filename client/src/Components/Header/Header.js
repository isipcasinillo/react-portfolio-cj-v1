import React, { useState, useEffet } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import navItemList from '../../utils/navitems';
import { IoIosClose, IoMdMenu } from 'react-icons/io';
function Header() {
  const [navActive, setnavActive] = useState(false);
  function toggleNav() {
    document.querySelector('#nav-dropdown').classList.toggle('hidden');
    setnavActive((prev) => !prev);
  }

  return (
    <>
      <nav className="navlist">
        <div className="nav-logo">
          <Link to={'/'}>CI</Link>
        </div>
        <ul className="nav-ul">
          {navItemList.map((navItem) => (
            <Link to={navItem.href} className="navItem-li" key={navItem.href}>
              {navItem.name}
            </Link>
          ))}
        </ul>
        {navActive ? (
          <IoIosClose size={40} onClick={toggleNav} className="IoClose" />
        ) : (
          <IoMdMenu size={30} onClick={toggleNav} className="IoMenu" />
        )}
      </nav>
      <div id="nav-dropdown" className="hidden">
        <ul onClick={toggleNav} className="nav-dropdown-ul">
          {navItemList.map((navItem) => (
            <li className="nav-dropdown-li" key={navItem.href}>
              <Link className="link" to={navItem.href}>
                {navItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Header;
