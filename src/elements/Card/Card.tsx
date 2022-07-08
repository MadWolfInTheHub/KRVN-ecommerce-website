import React, { FC } from 'react';
import { Link } from 'react-router-dom'
import { IIteam } from '../../types/types';
import './card.scss'

export interface Item {
  item: IIteam;
}

const Card: FC<Item> = ({item}) => {
  console.log(item.image)
  return (
    <Link to='' className='example'>
      <img className='example__picture' src={item.image} alt="pic" />
      <p className='example__description'>{item.description}</p>
      <div className="example__price">{`$ ${item.price}`}</div>
    </Link>
  );
};

export default Card;