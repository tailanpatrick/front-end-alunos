import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
  id: string;
  email: string;
}

interface LoginState {
  clicked: boolean;
  user: User | null;
  token: string | null;
}

const initialState: LoginState = {
  clicked: false,
  user: null,
  token: null,
};

const loginSuccess = createSlice({
  name: 'loginSuccess',
  initialState,
  reducers: {
    actionLoginSuccess: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = action.payload.user; // Armazena os dados do usuário
      state.token = action.payload.token; // Armazena o token
    },
  },
});

export const { actionLoginSuccess } = loginSuccess.actions;
export default loginSuccess.reducer;
