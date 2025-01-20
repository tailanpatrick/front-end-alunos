import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
  id: string;
  email: string;
}

interface LoginState {
  loading: boolean;
  isAuthenticated: boolean;
  user: User | null; // Informações do usuário
  token: string | null; // Token JWT
}

const initialState: LoginState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  token: null,
};

const loginRequest = createSlice({
  name: 'loginRequest',
  initialState,
  reducers: {
    actionLoginRequest: (state, action: PayloadAction<{ email: string; password: string }>) => {
      state.loading = true;
    },
    actionLoginSuccess: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    actionLoginFailure: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { actionLoginRequest, actionLoginSuccess, actionLoginFailure } =
  loginRequest.actions;
export default loginRequest.reducer;
