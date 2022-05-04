import React, { useState } from 'react';
import { FaAngleDown, FaTimes, FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';




const Navbar = () => {

   const [click, setClick] = useState(false)

   const handleClick = () => setClick(!click)

   const [dropdown, setDropdown] = useState(false);
   
   const onMouseEnter = () => {
      if (window.innerWidth < 960) {
         setDropdown(false);
      } else {
         setDropdown(true);
      }
   };
   const onMouseLeave = () => {
      if (window.innerWidth < 960) {
         setDropdown(false);
      } else {
         setDropdown(false);
      }
   };

  return (
     <>
        <div className="marze">
        <nav className="navbar">
           <Link to='/' className='navbar-logo'>
              <img src="/Logo.png" alt="" />
           </Link>
           <div className="menu-icon" onClick={handleClick}>
           </div>
           <ul>
              <li className="nav-item"
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
              >
                  <Link to='/products' className='nav-links'>
                    Products<FaAngleDown />
                  </Link>
                 {dropdown && <Dropdown />}
              </li>
              <li className="nav-item"
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
              >
                 <Link to='/business' className='nav-links'>
                    Business<FaAngleDown /> 
                 </Link>
                 {dropdown && <Dropdown />}
              </li>
              <li className="nav-item">
                 <Link to='/about' className='nav-links'>
                    About us 
                 </Link>
              </li>
              <li className="nav-item">
                 <Link to='/blogs' className='nav-links'>
                    Blogs 
                 </Link>
              </li>
              <li className="nav-item">
                 <Link to='/contact' className='nav-links'>
                    Contact
                 </Link>
              </li>
           </ul>
           </nav>
         </div>
     </>
  )
}

export default Navbar