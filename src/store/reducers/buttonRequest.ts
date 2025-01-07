import { createSlice } from '@reduxjs/toolkit';

interface ButtonState {
  loading: boolean;
}

const initialState: ButtonState = {
  loading: false,
};

const buttonRequest = createSlice({
  name: 'buttonRequest',
  initialState,
  reducers: {
    buttonClickedRequest: (state) => {
      state.loading = true;
      console.log('Estou fazendo a requisição');
    },
  },
});

export const { buttonClickedRequest } = buttonRequest.actions;
export default buttonRequest.reducer;
