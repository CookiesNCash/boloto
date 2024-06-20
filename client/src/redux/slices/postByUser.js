import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const postsByUserAdapter = createEntityAdapter();
const initialState = postsByUserAdapter.getInitialState({
  ids: [],
});

const postsByUserSlice = createSlice({
  name: 'postsByUser',
  initialState,
  reducers: {
    addPostsByUser: postsByUserAdapter.addMany,
    addPostByUser: postsByUserAdapter.addOne,
  },
});

export const selectAllPostsByUser = (state) => state.postsByUser.entities;
export const { addPostsByUser, addPostByUser } = postsByUserSlice.actions;
export default postsByUserSlice.reducer;
