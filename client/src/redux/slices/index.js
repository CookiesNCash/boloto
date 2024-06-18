import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import messageReducer from './messageSlise'

export default configureStore({
  reducer: {
    posts: postsReducer,
    message: messageReducer,
  },
});
