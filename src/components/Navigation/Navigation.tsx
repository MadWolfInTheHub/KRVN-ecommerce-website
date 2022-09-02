import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Cart, CartItem } from '../../types/cart';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './navigation.scss';
const Navigation: FC= () => {
  const cart: CartItem[]= useSelector((state: Cart): CartItem[] => state.cart);
  const [amountToBuy, setAmountToBuy] = useState(0);
  const [showMenu, setShowMenu] = useState(window.innerWidth > 800 ? true : false);
  let amount: number = 0;
  cart.forEach(el => amount += el.amount);
  
  useEffect(() => {
    const handleWindowResize = () => window.innerWidth > 800 ? setShowMenu(true) : setShowMenu(false);

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, [])

  const toggleMenu = () => {
    window.innerWidth < 800 ? setShowMenu(!showMenu) : setShowMenu(showMenu);
  }

  useEffect(() => {
    setAmountToBuy(amount);
  }, [amount]);
  
  return (
    <nav className='navigation'>
      <FontAwesomeIcon icon={faBars} className='navigation__menu_btn' onClick={toggleMenu}/>
      <div className={`navigation__menu ${showMenu ? '' : 'hidden'}`} onClick={toggleMenu}>
        <NavLink className='navigation__menu_link' to='/'>Home</NavLink>
        <NavLink className='navigation__menu_link' to='/forHim'>For Him</NavLink>
        <NavLink className='navigation__menu_link' to='/forHer'>For Her</NavLink>
        <NavLink className='navigation__menu_link' to='/customer'>Customer</NavLink>
      </div>
      <div className="navigation__cart">
      <NavLink to="/cart">
        <FontAwesomeIcon icon={faCartArrowDown}/>
      </NavLink>
        <div className='navigation__cart_items'>{amountToBuy}</div>
      </div>
    </nav>
  );
};

export default Navigation;