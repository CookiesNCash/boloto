import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

const postsAdapter = createEntityAdapter();
const initialState = postsAdapter.getInitialState({
  ids: [],
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: postsAdapter.addMany,
    addPost: postsAdapter.addOne,
  },
});

// export const selectCategory = (state, category) => Object.values(state.products.entities).filter(el => el.category === category)
export const selectAllPosts = (state) => state.posts.entities;
export const selectAllPosts1 = (state) => state.posts;
export const { addPosts, addPost } = postsSlice.actions;
export default postsSlice.reducer;
