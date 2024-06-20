import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';
import postsReducer from './postsSlice';
import messageReducer from './messageSlise';
import tokenReducer from './tokenSlice';
import postsByUserReducer from './postByUser';
import { combineReducers } from 'redux';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'], // Только token будет сохраняться
};

const rootReducer = combineReducers({
  posts: postsReducer,
  message: messageReducer,
  token: tokenReducer,
  postsByUser: postsByUserReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
