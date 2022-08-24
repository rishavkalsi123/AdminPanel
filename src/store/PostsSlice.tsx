import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { object } from "yup";
import API_BASE_URL from "../services/constants";
import { useDispatch } from "react-redux";
const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
  return await axios.get(`${API_BASE_URL}/posts`).then((response) => {
    return response.data;
  });
});

const PostsSlice = createSlice({
  name: "posts",
  initialState: {
    data: {},
    status: STATUSES.LOADING,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});
export default PostsSlice.reducer;

// ====== thunks =======
