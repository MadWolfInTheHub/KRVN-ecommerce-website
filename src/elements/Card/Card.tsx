import React from 'react';
import { Link } from 'react-router-dom'
import './card.scss'

const Card = () => {
  return (
    <Link to='' className='example'>
      <img className='example__picture'src="" alt="pic" />
      <p className='example__description'></p>
      <div className="example__price"></div>
    </Link>
  );
};

export default Card;