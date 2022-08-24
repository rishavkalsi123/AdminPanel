import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import ProductReducer from "./ProductSlice";
import PostReducer from "./PostsSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: ProductReducer,
    posts: PostReducer,
  },
});
export default store;
