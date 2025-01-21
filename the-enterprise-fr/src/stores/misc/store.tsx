import { configureStore } from '@reduxjs/toolkit';
import pageReducer from '../../reducers/misc/pageReducer';

const globalStore = configureStore({
  reducer: {
    page: pageReducer,
  },
});

export type RootState = ReturnType<typeof globalStore.getState>; // Infer the root state type
export type AppDispatch = typeof globalStore.dispatch; // Infer the dispatch type

export default globalStore;
