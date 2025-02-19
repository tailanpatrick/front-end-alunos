import { call, put, takeLatest } from 'redux-saga/effects';

import { actionLoginRequest } from '../reducers/loginRequest';
import { actionLoginSuccess } from '../reducers/loginSuccess';
import { actionLoginFailure } from '../reducers/loginFailure';
import axios from '../../services/axios';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';


interface LoginResponse {
  data: {
    token: string;
    user: {
      name: string;
      id: string;
      email: string;
    };
  };
}

function* handleLogin(action: { payload: { email: string; password: string } }) {
  try {
    const response: LoginResponse = yield call(axios.post, '/tokens', action.payload);

    const { user, token } = response.data;

    localStorage.setItem('authData', JSON.stringify(response.data));

    axios.defaults.headers.Authorization = `Bearer ${token}`;


    yield put(actionLoginSuccess({ user, token }));

    toast.success('Login realizado com sucesso.');


    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  } catch (error: any) {
    console.error('Erro ao realizar login:', error);

    const errorMessage = error.response?.data?.message || 'Usuário ou senha inválidos.';
    toast.error(errorMessage);

    yield put(actionLoginFailure());
  }
}


function* watchLoginRequest() {
  yield takeLatest(actionLoginRequest, handleLogin);
}

export default function* rootSaga() {
  yield watchLoginRequest();
}
