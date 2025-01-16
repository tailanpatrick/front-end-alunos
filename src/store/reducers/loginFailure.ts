import { createSlice } from '@reduxjs/toolkit';

interface ButtonState {
  error: boolean;
}

const initialState: ButtonState = {
  error: false,
};

const loginFailure = createSlice({
  name: 'loginFailure',
  initialState,
  reducers: {
    actionLoginFailure: (state) => {
      state.error = true;
      console.log('Erro no login');
    },
  },
});

export const { actionLoginFailure } = loginFailure.actions;
export default loginFailure.reducer;
