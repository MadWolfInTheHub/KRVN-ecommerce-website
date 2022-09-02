import React, { FC, useRef } from 'react';
import { useSelector } from 'react-redux';
import CartCard from './CartCard';
import { CartItem, Cart, OrderList } from '../../types/cart';
import "./shoppingCart.scss"
import { orderList } from '../../data/orderList';
import { clearCart } from '../../store/reducers/cartReducer';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const ShoppingCart: FC = () => {
  const orderNumber = Number((Math.random() * 1000).toFixed(0));
  const cart: CartItem[] = useSelector((state: Cart): CartItem[] => state.cart)
  const totalPrice: number = cart.reduce((acc, el): number => { return acc + (el.item.price * el.amount)}, 0)

  const popUp = useRef<HTMLTableSectionElement>(null);
  
  const dispatch = useDispatch();

  const onOpenPopUp = (): void => {
    popUp?.current?.classList.remove('hidden');
  }

  const onClosePopUp = (): void => {
    popUp?.current?.classList.add('hidden');
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
    popUp?.current?.classList.add('hidden');
    dispatch(clearCart());
  }

  return (
    <div className='cart'>
      {
       cart[0] === undefined ?
       <p className='cart__noOrders'>No Orders yet!</p>
       :
       cart.map(el => (

          <CartCard item={el.item} size={el.size} orderId={el.orderId} amount={el.amount} key={Math.random()}/>
        ))
      } 
      {
        totalPrice &&
        (<section className='cart__orderContainer'>
          <div className='cart__orderContainer_totalPrice'>
            <h2 className='cart__orderContainer_totalPrice_total'>Total: </h2>
            <h2 className='cart__orderContainer_totalPrice_amount'>$ {totalPrice}</h2>
          </div>
          <button className='cart__orderBtn btn' onClick={onOpenPopUp}>Order</button>
        </section>)
      }
      <section ref={popUp} className='orderConfirmation hidden'>
        <button className='orderConfirmation__closeBtn btn' onClick={onClosePopUp}>+</button>
        <h3>Order number: {orderNumber}</h3>
        <p>Customer: customer</p>
        <p>Address: customer's address</p>
        <p>Delivery time: 4 days</p>
        <p>Total: ${totalPrice}</p>
        <Link to='/customer'>
          <button className='orderConfirmation__btn btn' onClick={onOrder}>Confirm</button>
        </Link>
      </section>
        
      </div>
  );
};

export default ShoppingCart;
