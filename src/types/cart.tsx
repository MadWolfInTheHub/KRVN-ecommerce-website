import { IIteam } from "./types";

export interface CartItem {
  item: IIteam;
  size: string;
  orderId: number,
  amount: number;
}


export interface Cart {
  cart: CartItem[];
}

export interface User {
  id: number,
  name: string,
  address: string,
}

export interface OrderList {
  orderId: number,
  orderItems: CartItem[],
  price: number,
  status: string,
  payed: boolean,
  customer: User,
}

// export enum CartActionTypes {
//   ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
//   DELETE_ITEM_TO_CART = 'DELETE_ITEM_TO_CART',
// }

// interface CartAddItem {
//   type: CartActionTypes.ADD_ITEM_TO_CART;
//   payload: any[]
// }
// interface CartDeleteItem {
//   type: CartActionTypes.DELETE_ITEM_TO_CART ;
//   payload: string;
// }
// export type CartActions = CartAddItem | CartDeleteItem;
