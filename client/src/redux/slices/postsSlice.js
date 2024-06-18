import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

// const hostUrl = process.env.NEXT_PUBLIC_HOST_URL;
// const allPost = axios.get(`${hostUrl}/post/all`, {
//   headers: {
//     'Authorization': `Bearer ${accessToken}`
//   }
// })
// .then((response) => console.log(response.data))
// .catch((error) => console.error('Error fetching posts:', error));



// console.log(allPost)
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
export const { addPosts, addPost } = postsSlice.actions;
export default postsSlice.reducer;
