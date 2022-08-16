import { createSlice } from "@reduxjs/toolkit";
import { object } from "yup";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart(state: {}[], action: { type: string; payload: {} }) {
      state.push(action.payload);
    },
    removeCart(state, action) {
      return state.filter((item: any) => item.id !== action.payload);
    },
  },
});
export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
