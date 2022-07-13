import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartCard from '../../elements/CartCard/CartCard';
import { CartItem, Cart } from '../../types/cart';
import OrderConfirmation from '../../elements/OrderConfirmation/OrderConfirmation';
import "./shoppingCart.scss"

const ShoppingCart: FC = () => {
  const cart: CartItem[]= useSelector((state: Cart): CartItem[] => state.cart)
  
  const totalPrice: number = cart.reduce((acc, el): number => { return acc + (el.item.price * el.amount)}, 0)

  useEffect(() => {
    const popUp = document.querySelector('.orderConfirmation');
    const openPopUpBtn =  document.querySelector('.cart__orderBtn');   


    const onClosePopUp = () => {
      popUp?.classList.remove('hidden')
    }
    
    openPopUpBtn?.addEventListener('click', onClosePopUp)
    return () => {
      openPopUpBtn?.removeEventListener('click', onClosePopUp)
      
    }
  })

  return (
    <div className='cart'>
      {
       cart[0] === undefined ?
       <p className='cart__noOrders'>No Orders yet!</p>
       :
       cart.map(el => (

          <CartCard item={el.item} size={el.size} orderId={el.orderId} amount={el.amount}/>
        ))
      } 
      {
        totalPrice !== 0 ? 
        <section className='cart__orderContainer'>
          <div className='cart__orderContainer_totalPrice'>
            <h2 className='cart__orderContainer_totalPrice_total'>Total: </h2>
            <h2 className='cart__orderContainer_totalPrice_amount'>{totalPrice}</h2>
          </div>
          <button className='cart__orderBtn'>Order</button>
        </section>
        : null 
      }
      <OrderConfirmation 
        totalPrice={totalPrice} 
        cart={cart}/>
      </div>
  );
};

export default ShoppingCart;
