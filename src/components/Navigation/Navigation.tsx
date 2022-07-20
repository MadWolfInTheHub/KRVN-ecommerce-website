import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './navigation.scss';
import { Cart, CartItem } from '../../types/cart';
import { useSelector } from 'react-redux';
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
  

  useEffect(() => {
    const menuBtn = document.querySelector('.navigation__menu_btn');
    const menu = document.querySelector('.navigation__menu');

    const toggleMenu = () => {
      window.innerWidth < 800 ? setShowMenu(!showMenu) : setShowMenu(showMenu);
    }

    menuBtn?.addEventListener('click', toggleMenu)
    menu?.addEventListener('click', toggleMenu)
    return () => {
      menuBtn?.removeEventListener('click', toggleMenu)
      menu?.removeEventListener('click', toggleMenu)
    }
  }, [showMenu])
  

  useEffect(() => {
    setAmountToBuy(amount);
  }, [amount]);
  
  return (
    <nav className='navigation'>
      <FontAwesomeIcon icon={faBars} className='navigation__menu_btn'/>
      <div className={`navigation__menu ${showMenu ? '' : 'hidden'}`}>
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