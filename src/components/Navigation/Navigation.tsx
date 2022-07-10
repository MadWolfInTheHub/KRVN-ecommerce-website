import React, { FC } from 'react';
import { NavLink } from 'react-router-dom'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './navigation.scss'
const Navigation: FC= () => {
  return (
    <nav className='navigation'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/forHim'>For Him</NavLink>
      <NavLink to='/forHer'>For Her</NavLink>
      <div></div>
      <NavLink to='/customer'>Customer</NavLink>
      <div className="navigation__cart">
      <NavLink to="/cart">
        <FontAwesomeIcon icon={faCartArrowDown}/>
      </NavLink>
        <div className='navigation__cart_items'>0</div>
      </div>
    </nav>
  );
};

export default Navigation;