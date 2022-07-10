import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './navigation.scss';
import { Cart, CartItem } from '../../types/cart';
import { useSelector } from 'react-redux';
const Navigation: FC= () => {
  const cart: CartItem[]= useSelector((state: Cart): CartItem[] => state.cart)
  const [amountToBut, setAmountToBuy] = useState(0)

  useEffect(() => {
    setAmountToBuy(cart.length)
  }, [cart])
  
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
        <div className='navigation__cart_items'>{amountToBut}</div>
      </div>
    </nav>
  );
};

export default Navigation;