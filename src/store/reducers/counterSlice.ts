import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
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

export const { increment, reset } = loginSlice.actions;
export default loginSlice.reducer;
