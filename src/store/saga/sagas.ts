import { call, put, all, takeLatest } from 'redux-saga/effects';
import { buttonClickedRequest } from '../reducers/buttonRequest';
import { buttonClickedSuccess } from '../reducers/buttonSuccess';
import { buttonClickedFailure } from '../reducers/buttonFailure';
import { toast } from 'react-toastify'

const request = () =>
  new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve(); // Simula sucesso
    }, 600);
  });

function* handleButtonClick() {
  try {
    yield call(request);
    yield put(buttonClickedSuccess());

  } catch (err) {
    yield put(buttonClickedFailure());

  }
}

export default function* rootSaga() {
  yield all([takeLatest(buttonClickedRequest.type, handleButtonClick)]);
}
