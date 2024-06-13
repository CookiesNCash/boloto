import { createSlice, createEntityAdapter} from '@reduxjs/toolkit';


const postsAdapter = createEntityAdapter();
const initialState = postsAdapter.getInitialState({
    // Добавление начального списка товаров
  });

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPosts: postsAdapter.addMany,
        addPost: postsAdapter.addOne,
    }
})

// export const selectCategory = (state, category) => Object.values(state.products.entities).filter(el => el.category === category)
export const selectAllPosts = state => state.posts.entities;
export const {addPosts, addPost} = postsSlice.actions;
export default postsSlice.reducer;