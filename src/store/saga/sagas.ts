import { call, put, all, takeLatest } from 'redux-saga/effects';
import { buttonClickedRequest } from '../reducers/buttonRequest';
import { buttonClickedSuccess } from '../reducers/buttonSuccess';
import { buttonClickedFailure } from '../reducers/buttonFailure';
import { toast } from 'react-toastify'

const request = () =>
  new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) resolve(); // Simula sucesso
      else reject(new Error('Erro simulado')); // Simula falha
    }, 2000);
  });

function* handleButtonClick() {
  try {
    yield call(request);
    yield put(buttonClickedSuccess());
    toast.success('Sucesso')
  } catch (err) {
    yield put(buttonClickedFailure());
    toast.error('Deu erro')
  }
}

export default function* rootSaga() {
  yield all([takeLatest(buttonClickedRequest.type, handleButtonClick)]);
}
