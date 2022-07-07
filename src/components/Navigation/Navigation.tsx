import React from 'react';
import { NavLink } from 'react-router-dom'
import './navigation.scss'
const Navigation = () => {
  return (
    <nav className='navigation'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/forHim'>For Him</NavLink>
      <NavLink to='/forHer'>For Her</NavLink>
      <div></div>
      <NavLink to='/customer'>Customer</NavLink>
    </nav>
  );
};

export default Navigation;