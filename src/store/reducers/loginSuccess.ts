import { createSlice } from '@reduxjs/toolkit';

interface ButtonState {
  clicked: boolean;
}

const initialState: ButtonState = {
  clicked: false,
};

const loginSuccess = createSlice({
  name: 'loginSuccess',
  initialState,
  reducers: {
    actionLoginSuccess: (state) => {
      return state;
    },
  },
});

export const { actionLoginSuccess } = loginSuccess.actions;
export default loginSuccess.reducer;
