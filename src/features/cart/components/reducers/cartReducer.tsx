import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../../../types/cart";

export const cartItem = createSlice({
  name:'cart',
  initialState: [] as CartItem[],
  reducers: {
    addItem: (state: CartItem[], action: any): void => {
      state.push(action.payload);
    },
    deleteItem: (state: CartItem[], action: any): CartItem[] => {
      return state = state.filter(({orderId}) => orderId !== action.payload);
    },
    setNewAmount: (state: CartItem[], action: any)=> { 
      const { itemId, itemSize, amount } = action.payload;
      // eslint-disable-next-line
      state.map(el => {
       if(el.item.id === itemId && el.size === itemSize) el.amount += amount; 
      })
    },
    increaseAmount: (state: CartItem[], action: any) => {
      const { orderId } = action.payload;
      // eslint-disable-next-line
      state.map(el => {
        if(el.orderId === orderId) el.amount += 1
      })
    },
    decreaseAmount: (state: CartItem[], action: any) => {
      const { orderId } = action.payload;
      // eslint-disable-next-line
      state.map(el => {
        if(el.orderId === orderId) el.amount -= 1
      })
    },
    clearCart: (state: CartItem[]): never [] => {
      return state = []
    },
  },
})


export const { addItem, deleteItem, setNewAmount, increaseAmount, decreaseAmount, clearCart } = cartItem.actions;

export default cartItem.reducer;
