import React, { FC, useEffect } from 'react';
import "./cartCard.scss"
import { Link } from 'react-router-dom';
import { deleteItem, toggleAmount } from '../../store/reducers/cartReducer';
import { useDispatch } from 'react-redux';
import { CartItem } from '../../types/cart';


const CartCard: FC<CartItem> = ({item, size, orderId, amount}) => {
  const dispatch = useDispatch();
  const increase = 1;
  const decrease = -1;

  useEffect((): void => {
    if(amount === 0) dispatch(deleteItem(orderId))
  })
  
  
  return (
    <div className='cartExample'>
      <Link to={`/${item.category.name}/${item.id}`}>
        <img className='cartExample__picture' src={item.image} alt="pic"/>
      </Link>
      <h4 className='cartExample__description'>{item.description}</h4>
      <h4 className='cartExample__size'>{size}</h4>
      <h2 className="cartExample__price">{`$ ${item.price}`}</h2>
      <div className='cartExample__amount'>
        <button 
        data-id={orderId} 
        className='btn amount-btn'
        onClick={() => dispatch(toggleAmount({orderId, decrease}))}>
          -
        </button>
        <div className='cartExample__amount_number'>{amount}</div>
        <button 
        data-id={orderId} 
        className='btn amount-btn'
        onClick={() => dispatch(toggleAmount({orderId, increase}))}
        >
          +
        </button>
      </div>
      <div className='cartExample__order-container'>
        <button 
        data-id={orderId} 
        className='cartExample__deleteBtn btn' 
        onClick={() => dispatch(deleteItem(orderId))}
        >
          +
        </button>
      </div> 
    </div>
  );
};

export default CartCard;