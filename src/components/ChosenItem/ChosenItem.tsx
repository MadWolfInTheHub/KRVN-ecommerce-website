import React from 'react';
import { useLocation } from 'react-router-dom';
import { items } from '../../data/items';
import { IIteam } from '../../types/types';
import './ChosenItem.scss'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChosenItem = () => {
  const { pathname } = useLocation()
  const itemId: string = pathname.split('/')[2]

  const item: IIteam = items.filter(item => item.id === itemId)[0];
  
  return (
    <div className='chosenExample'>
      <h1>KRVN Studio</h1>
      <h3>Mind the shape not the color!</h3>
      <h4 className='chosenExample__description'>{item.description}</h4>
      <img className='chosenExample__picture' src={item.image} alt="pic" />
      <h2 className="chosenExample__price">{`$ ${item.price}`}</h2>
      <div className="chosenExample__options">
      <div className='chosenExample__order-container'>
        <button className="chosenExample__size clicked">XS</button>
        <button className="chosenExample__size">S</button>
        <button className="chosenExample__size">M</button>
        <button className="chosenExample__size">L</button>
        <button className='chosenExample__orderBtn' data-id={item.id}>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
      </div> 
    </div>
  );
};

export default ChosenItem;