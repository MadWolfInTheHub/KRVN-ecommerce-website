import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { CartItem, Cart } from '../../types/cart';
import "./shoppingCart.scss"

const ShoppingCart: FC = () => {
  const cart: CartItem[]= useSelector((state: Cart): CartItem[] => state.cart)
  // const dispatch = useDispatch();

  
  console.log(cart)
  return (
    <div className='cart'>
      shopping cart
    </div>
  );
};

export default ShoppingCart;
