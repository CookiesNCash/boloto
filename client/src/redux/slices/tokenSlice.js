import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

const hostUrl = process.env.NEXT_PUBLIC_HOST_URL;

const tokenAdapter = createEntityAdapter();
const initialState = tokenAdapter.getInitialState({
  ids: [],
});

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    addToken: (state, action) => {
      tokenAdapter.removeAll(state);
      tokenAdapter.addOne(state, action.payload);
    },
  },
});

// export const selectCategory = (state, category) => Object.values(state.products.entities).filter(el => el.category === category)
export const selectAllToken = (state) => state.token.entities;
export const { addToken } = tokenSlice.actions;
export default tokenSlice.reducer;
