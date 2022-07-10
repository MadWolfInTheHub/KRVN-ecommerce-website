import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../types/cart";

const initialState = [
  {
    id: 0,
    size: '',
  },
] as CartItem[];

export const cartItem = createSlice({
  name:'cart',
  initialState,
  reducers: {
    addItem: (state: CartItem[], action: any): void => {
      state.push(action.payload)
    },
    deleteItem: (state: CartItem[], action: any): void => {
      state.filter(item => item.id !== action.payload)
    },
  },
})


export const { addItem, deleteItem } = cartItem.actions

export default cartItem.reducer
