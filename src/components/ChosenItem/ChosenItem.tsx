import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { items } from '../../data/items';
import { IIteam } from '../../types/types';
import './ChosenItem.scss'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/reducers/cartReducer';

const ChosenItem = () => {
  const { pathname } = useLocation()
  const [itemSize, setItemSize] = useState('XS')

  const dispatch = useDispatch();

  useEffect(() => {
    const sizeBtn: NodeListOf<Element> = document.querySelectorAll('[data-size]');
    const addToCartBtn: Element | null = document.querySelector('[data-id]')
    const onToggleSize: any= (e: any): void => {

      if(e.target.outerHTML.includes('data-size')) {

        sizeBtn.forEach(el => el.classList.remove('clicked'))
        e.target.classList.add('clicked')
        setItemSize(e.target.innerHTML)
      }
      return;
    }

    const addItemToCart = (): void => {
      dispatch(addItem({id: Number(item.id), size: itemSize}))
    }

/*     const onOrder: any = (): void => {
      const newOrder: number[] = [...cart, Number(item.id)]
      setCart(newOrder)
    } */
    
    sizeBtn?.forEach(el => el.addEventListener('click', onToggleSize))
    addToCartBtn?.addEventListener('click', addItemToCart)
    return(): void => {
      sizeBtn?.forEach(el => el.removeEventListener('click', onToggleSize))
      addToCartBtn?.removeEventListener('click', addItemToCart)
    }
  })
  
  console.log(itemSize)

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
        <button data-size="XS" className="chosenExample__size clicked">XS</button>
        <button data-size="S" className="chosenExample__size">S</button>
        <button data-size="M" className="chosenExample__size">M</button>
        <button data-size="L" className="chosenExample__size">L</button>
        <button data-id={item.id} className='chosenExample__orderBtn'>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
      </div> 
    </div>
  );
};

export default ChosenItem;