import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import CartCard from '../../elements/CartCard/CartCard';
import { CartItem, Cart } from '../../types/cart';
import "./shoppingCart.scss"

const ShoppingCart: FC = () => {
  const cart: CartItem[]= useSelector((state: Cart): CartItem[] => state.cart)
  
  const totalPrice: number = cart.reduce((acc, el): number => { return acc + (el.item.price * el.amount)}, 0)
  return (
    <div className='cart'>
      {
       cart[0] === undefined ?
       null
       :
       cart.map(el => (

          <CartCard item={el.item} size={el.size} orderId={el.orderId} amount={el.amount}/>
        ))
      } 
      {
        totalPrice !== 0 ? 
        <section>
          <h3>Total:</h3>
          <p>{totalPrice}</p>
        </section>
        : null 
      }
      </div>
  );
};

export default ShoppingCart;
