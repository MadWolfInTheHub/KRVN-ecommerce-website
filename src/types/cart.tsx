export interface CartItem {
  id: number;
  size: string;
}

export interface Cart {
  cart: CartItem[];
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
