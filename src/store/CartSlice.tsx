import { createSlice } from "@reduxjs/toolkit";
import { AnyListenerPredicate } from "@reduxjs/toolkit/dist/listenerMiddleware/types";
import { object } from "yup";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart(state: any, action: { type: any; payload: any }) {
      // const productIndex =
      const productIndex = state.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (productIndex !== -1) {
        state[productIndex].count = state[productIndex].count
          ? state[productIndex].count + 1
          : 1;
      } else {
        state.push({ ...action.payload, count: 1 });
      }
      return state;
    },
    removeCart(state, action) {
      return state.filter((item: any) => item.id !== action.payload);
    },
  },
});
export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
