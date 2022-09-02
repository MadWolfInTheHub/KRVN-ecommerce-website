import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { items } from '../../data/items';
import { IIteam } from '../../types/types';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, setNewAmount } from '../../store/reducers/cartReducer';
import { Cart, CartItem } from '../../types/cart';
import './ChosenItem.scss'

const ChosenItem = () => {
  const sizes = ['XS', 'S', 'M', 'L']
  const [itemSize, setItemSize] = useState('XS');

  const { pathname } = useLocation();
  const itemId: string = pathname.split('/')[2];
  const item: IIteam = items.filter(item => item.id === itemId)[0];

  const cart: CartItem[]= useSelector((state: Cart): CartItem[] => state.cart);
  const [amount] = useState(1);
  
  const dispatch = useDispatch();
  
  const sizeBtn: NodeListOf<Element> = document.querySelectorAll('[data-size]');

  const onToggleSize: any= (e: any): void => {
    if(e.target.outerHTML.includes('data-size')) {
      sizeBtn.forEach(el => el.classList.remove('clicked'));
      e.target.classList.add('clicked');
      setItemSize(e.target.innerHTML);
    }
    return;
  }
  
  const addItemToCart = (): void => {
    const orderId: number = Math.random()
    if(cart.map(el => 
      el.item.id === itemId && el.size === itemSize)
      .includes(true)) {
        dispatch(setNewAmount({itemId, itemSize, amount}));
        return;
    }
    dispatch(addItem({item, size: itemSize, orderId, amount}));
  }


  return (
    <div className='chosenExample'>
      <h1>KRVN Studio</h1>
      <h3>Mind the shape not the color!</h3>
      <h4 className='chosenExample__description'>{item.description}</h4>
      <img className='chosenExample__picture' src={item.image} alt="pic" />
      <h2 className="chosenExample__price">{`$ ${item.price}`}</h2>
      <div className="chosenExample__options">
      <div className='chosenExample__order-container'>
        {
         sizes.map(size => (
           <button onClick={(e) => onToggleSize(e)} data-size={size} className={`chosenExample__size ${ itemSize === size ?'clicked' : ''}`}>{size}</button>
         ))
        }
        <button onClick={addItemToCart} data-id={item.id} className='chosenExample__orderBtn'>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
      </div> 
    </div>
  );
};

export default ChosenItem;