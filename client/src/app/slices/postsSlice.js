import { 
    createSlice,
    createEntityAdapter,
} from '@reduxjs/toolkit';


const postsAdapter = createEntityAdapter();
const initialState = postsAdapter.getInitialState({
    // // Добавление начального списка товаров
    // ids: allProducts.products.map(product => product.id),
    // entities: allProducts.products,
  });

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPosts: posts.addMany,
        addPost: posts.addOne,
    }
})

// export const selectCategory = (state, category) => Object.values(state.products.entities).filter(el => el.category === category)
export const selectAllPosts = state => state.posts.entities;
export const {addPosts, addPost} = productsSlice.actions;
export default postsSlice.reducer;