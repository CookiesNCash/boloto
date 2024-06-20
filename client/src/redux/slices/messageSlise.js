import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: [],
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.entities.push(action.payload);
    },
    // Add more reducers if needed, e.g., removeMessage, updateMessage, etc.
  },
});

// Selector to select all messages
export const selectAllMessage = (state) => state.message.entities;

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
