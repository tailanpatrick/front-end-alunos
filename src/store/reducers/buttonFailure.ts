import { createSlice } from '@reduxjs/toolkit';

interface ButtonState {
  error: boolean;
}

const initialState: ButtonState = {
  error: false,
};

const buttonFailure = createSlice({
  name: 'buttonFailure',
  initialState,
  reducers: {
    buttonClickedFailure: (state) => {
      state.error = true;
      console.log('Deu erro =(');
    },
  },
});

export const { buttonClickedFailure } = buttonFailure.actions;
export default buttonFailure.reducer;
