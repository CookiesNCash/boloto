import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

const messageAdapter = createEntityAdapter();
const initialState = messageAdapter.getInitialState({
  ids: [],
});

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addMessage: messageAdapter.addOne,
  },
});

// export const selectCategory = (state, category) => Object.values(state.products.entities).filter(el => el.category === category)
export const selectAllMessage = (state) => state.message.entities;
export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
