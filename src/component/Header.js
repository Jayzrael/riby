import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiAlignRight, FixCircle, FiChevronDown } from 'react-icons/fi'


const Header = () => {

   const [isMenu, setisMenu] = useState(false)
   const toggleClass = () => {
      setisMenu (isMenu === false ? true : false)
   }

   let boxClass = ["main-menu menu-right menuq1"]
   if (isMenu) {
      boxClass.push('menuq2')
   } else {
      boxClass.push('')
   }

   const [isMenuSubMenu, setMenuSubMenu] = useState(false)
   
   const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false)
   }

   let boxClassSubMenu = ["sub_menus"]
   if (isMenuSubMenu) {
      boxClassSubMenu.push( 'sub_menus_Active' )
   } else {
      boxClassSubMenu.push('')
   }



   return (
      <header className="header_middle">
         <div className="container1">
            <div className="logo">
               <NavLink exact activeClassName='is-active' to='/'>
                  <img src="/Logo.png" alt="" />
               </NavLink>
            </div>

            <div className="header_middle_menu">
               <nav className="main_nav">
                  <ul className={boxClass.join('')}>
                     <li className="menu_items">
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={'/'}>Products</NavLink>
                     </li>
                     <li className="menu-items"><NavLink onClick={toggleClass} activeClassName='is-active' to={ '/Business' }>Business</NavLink></li>
                  </ul>
               </nav>
            </div>
         </div>
      </header>
   );
}
     
export default Header