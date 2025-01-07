// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import buttonReducer from './slices/buttonSlice';
import counterReducer from './slices/counterSlice';

const store = configureStore({
  reducer: {
    button: buttonReducer,
    counter: counterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
