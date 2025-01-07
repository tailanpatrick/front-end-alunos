import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: false },
  reducers: {
    increment: (state) => {
      state.value = !state.value;
    },
    reset: (state) => {
      state.value = false;
    },
  },
});

export const { increment, reset } = counterSlice.actions;
export default counterSlice.reducer;
