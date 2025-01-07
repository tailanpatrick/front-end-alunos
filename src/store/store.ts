import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/sagas';

import buttonRequest from './reducers/buttonRequest';
import buttonSuccess from './reducers/buttonSuccess';
import buttonFailure from './reducers/buttonFailure';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    buttonRequest,
    buttonSuccess,
    buttonFailure,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
