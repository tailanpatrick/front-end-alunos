// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import buttonReducer from './reducers/buttonSlice';
import counterReducer from './reducers/counterSlice';

const store = configureStore({
  reducer: {
    button: buttonReducer,
    counter: counterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
