import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../types/cart";

export const cartItem = createSlice({
  name:'cart',
  initialState: [] as CartItem[],
  reducers: {
    addItem: (state: CartItem[], action: any): void => {
      state.push(action.payload)
    },
    deleteItem: (state: CartItem[], action: any): CartItem[] => {
      return state = state.filter(({orderId}) => orderId !== action.payload);
    },
    setNewAmount: (state: CartItem[], action: any)=> { 
      const { itemId, itemSize, amount } = action.payload
      state.forEach(el => {
       if(el.item.id === itemId && el.size === itemSize) el.amount += amount; 
      })
    },
    toggleAmount: (state: CartItem[], action: any)=> { 
      const { orderId, increase, decrease } = action.payload
      
      state.forEach(el => {
        if(el.orderId === orderId) increase ? el.amount += increase : el.amount += decrease; 
      })
    },
    clearCart: (state: CartItem[]) => {
      return state = []
    },
  },
})


export const { addItem, deleteItem, setNewAmount, toggleAmount, clearCart } = cartItem.actions

export default cartItem.reducer
