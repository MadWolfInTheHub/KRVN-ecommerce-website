import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { items } from '../../data/items';
import Card from '../../elements/Card/Card';
import { CartItem, Cart } from '../../types/cart';
import { IIteam } from '../../types/types';
import "./shoppingCart.scss"

const ShoppingCart: FC = () => {
  const cart: CartItem[]= useSelector((state: Cart): CartItem[] => state.cart)
  // const dispatch = useDispatch();
  const itemsToBuy:IIteam[]=  cart.map(item => items.filter(el => Number(el.id) === item.id)).flat()
  const totalPrice: number = itemsToBuy.reduce((acc, el): number => { return acc + el.price }, 0)
  console.log(itemsToBuy)

  return (
    <div className='cart'>
      {
       itemsToBuy[0] === undefined ?
       null
       :
        itemsToBuy.map(el => (
          <Card key={Math.random()} item={el}/>
        ))
      }
      <section>
        <h3>Total:</h3>
        <p>{totalPrice}</p>
      </section>
    </div>
  );
};

export default ShoppingCart;
