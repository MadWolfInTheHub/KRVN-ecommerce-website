import React, { FC, useEffect } from 'react';
import { CartItem, OrderList } from '../../types/cart';
import { orderList } from '../../data/orderList';
import './orderConfirmation.scss'
import { clearCart } from '../../store/reducers/cartReducer';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

interface Confirmation {
  totalPrice: number;
  cart: CartItem[];
}
const OrderConfirmation: FC<Confirmation> = ({totalPrice, cart}) => {
  const orderNumber = Number((Math.random() * 1000).toFixed(0));
  const dispatch = useDispatch();

  useEffect(() => {
    const popUp: Element | null = document.querySelector('.orderConfirmation');
    const closePopUpBtn: Element | null =  document.querySelector('.orderConfirmation__closeBtn');   
    const orderBtn: Element | null =  document.querySelector('.orderConfirmation__btn');   


    const onClosePopUp = (): void => {
      popUp?.classList.add('hidden');
    }

    const onOrder = () => {
      const newOrder: OrderList = {
        orderId: orderNumber,
        orderItems: cart,
        price: totalPrice,
        status: {
          inProgress: true,
          completed: false,
          customerRefusal: false,
          sellerRefusal: false,
        },
        payed: false,
        customer: {
          id: 1,
          name: 'user',
          address: 'country, city, street, building',
        }
      };
      orderList.unshift(newOrder);
      popUp?.classList.add('hidden');
      dispatch(clearCart());
    }
    
    closePopUpBtn?.addEventListener('click', onClosePopUp);
    orderBtn?.addEventListener('click', onOrder);
    return (): void => {
      closePopUpBtn?.removeEventListener('click', onClosePopUp);
      orderBtn?.removeEventListener('click', onOrder);
    }
  });
  
  return (
    <section className='orderConfirmation hidden'>
      <button className='orderConfirmation__closeBtn btn'>+</button>
      <h3>Order number: {orderNumber}</h3>
      <p>Customer: customer</p>
      <p>Address: customer's address</p>
      <p>Delivery time: 4 days</p>
      <p>Total: ${totalPrice}</p>
      <Link to='/customer'>
        <button className='orderConfirmation__btn btn'>Confirm</button>
      </Link>
    </section>
  );
};

export default OrderConfirmation;