import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { object } from "yup";
import API_BASE_URL from "../services/constants";
import { useDispatch } from "react-redux";
const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts(state: any, action: any) {
      state.data = action.payload;
    },
    setStatus(state: any, action: any) {
      state.status = action.payload;
    },
  },
});
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// ====== thunks =======

export function fetchProducts(limit: number = 20) {
  return async function fetchProductsThunk(
    dispatch: (data: any) => void,
    getState: any
  ) {
    try {
      return await axios
        .get(`${API_BASE_URL}/products?limit=${limit}`)
        .then((response) => {
          dispatch(setProducts(response.data));
          dispatch(setStatus(STATUSES.IDLE));
        })
        .catch((err) => {
          dispatch(setStatus(STATUSES.ERROR));
        });
    } catch (err) {}
  };
}
