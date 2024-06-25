import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../accest/logo.png";
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      {/* Logo section */}
      <div className="logo">
        <Link to={"/home"}>
        <img src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* Element section */}
      <div className={`element ${menuOpen ? 'open' : ''}`}>
        <ul>
          <Link to={"/about"}> <li>About</li> </Link>
          <Link to={"/contact"}> <li>Contact</li> </Link>
        </ul>
      </div>

      {/* Button section */}
      <div className="log-sig-btn">
      <Link to={"/login"}> <button className='search-btn' type="submit">Login</button> </Link>
        <Link to={"/signup"}> <button className='search-btn' type="submit">Signup</button> </Link>
      </div>

      {/* Hamburger menu icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Dropdown menu for small screens */}
      <div className={`dropdown-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
        <Link to={"/about"}> <li>About</li> </Link>
        <Link to={"/contact"}> <li>Contact</li> </Link>
        <Link to={"/login"}> <li><button className='search-btn' type="submit">Login</button></li> </Link>
        <Link to={"/signup"}> <li><button className='search-btn' type="submit">Signup</button></li> </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
