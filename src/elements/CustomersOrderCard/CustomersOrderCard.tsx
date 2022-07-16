import React from 'react';
import { Link } from 'react-router-dom';
import './customersOrderCard.scss'

const CustomersOrderCard = ({el, orderId}: any) => {

  return (
    <div className='order'>
      <div className='order__amount'>{el.amount}</div>
      <Link to={`/${el.item.category.name}/${el.item.id}`}>
        <img className='order__picture' src={el.item.image} alt="pic"/>
      </Link>
      <h5 className='order__description'>{el.item.description}</h5>
      <h5 className='order__size'>{el.size}</h5>
      <h5 className="order_price">{`$ ${el.item.price}`}</h5>
    </div>
  );
};

export default CustomersOrderCard;