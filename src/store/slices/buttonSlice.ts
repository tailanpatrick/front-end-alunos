
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ButtonState {
  clicked: boolean;
}

const initialState: ButtonState = {
  clicked: false,
};

const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    buttonClicked: (state) => {
      state.clicked = !state.clicked;
      console.log(state.clicked)
    },
  },
});

export const { buttonClicked } = buttonSlice.actions;
export default buttonSlice.reducer;
