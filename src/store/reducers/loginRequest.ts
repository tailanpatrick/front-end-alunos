import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { redirect } from 'react-router-dom';

interface LoginState {
  loading: boolean;
  isAuthenticated: boolean;
}

const initialState: LoginState = {
  loading: false,
  isAuthenticated: false,
};

const loginRequest = createSlice({
  name: 'loginRequest',
  initialState,
  reducers: {
    actionLoginRequest: (state, action: PayloadAction<{ email: string; password: string }>) => {
      state.loading = true;
    },
    actionLoginSuccess: (state) => {
      state.loading = false;
      state.isAuthenticated = true;
    },
    actionLoginFailure: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
    },
  },
});

export const { actionLoginRequest, actionLoginSuccess, actionLoginFailure } = loginRequest.actions;
export default loginRequest.reducer;
