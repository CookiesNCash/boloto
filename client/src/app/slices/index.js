import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './postsSlice.js';

export default configureStore({
    reducer: {
        post: postsSlice,
    }
})