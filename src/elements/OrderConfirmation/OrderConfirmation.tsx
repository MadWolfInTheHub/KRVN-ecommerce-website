import React, { FC, useEffect } from 'react';
import { CartItem } from '../../types/cart';
import './orderConfirmation.scss'

interface Confirmation {
  totalPrice: number;
  cart: CartItem[];
}
const OrderConfirmation: FC<Confirmation> = ({totalPrice}) => {
  const orderNumber = (Math.random() * 1000).toFixed(0)

  useEffect(() => {
    const popUp: Element | null = document.querySelector('.orderConfirmation');
    const closePopUpBtn: Element | null =  document.querySelector('.orderConfirmation__closeBtn');   


    const onClosePopUp = (): void => {
      popUp?.classList.add('hidden')
    }
    
    closePopUpBtn?.addEventListener('click', onClosePopUp)
    return (): void => {
      closePopUpBtn?.removeEventListener('click', onClosePopUp)
      
    }
  })
  
  return (
    <section className='orderConfirmation hidden'>
      <button className='orderConfirmation__closeBtn'>+</button>
      <h3>Order number: {orderNumber}</h3>
      <p>Customer: customer</p>
      <p>Address: customer's address</p>
      <p>Delivery time: 4 days</p>
      <p>Total: ${totalPrice}</p>
      <button className='orderConfirmation__btn'>Confirm</button>
    </section>
  );
};

export default OrderConfirmation;