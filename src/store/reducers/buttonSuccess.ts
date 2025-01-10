import { createSlice } from '@reduxjs/toolkit';


interface ButtonState {
  clicked: boolean;
}

const initialState: ButtonState = {
  clicked: false,
};

const buttonSuccess = createSlice({
  name: 'buttonSuccess',
  initialState,
  reducers: {
    buttonClickedSuccess: (state) => {
      state.clicked = !state.clicked;
    },
  },
});

export const { buttonClickedSuccess } = buttonSuccess.actions;
export default buttonSuccess.reducer;
