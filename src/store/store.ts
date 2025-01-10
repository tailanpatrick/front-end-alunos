import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/sagas';
import { persistStore, Persistor } from 'redux-persist';

import persistedReducers from './redux-persist/redux-persist';

const sagaMiddleware = createSagaMiddleware();

const store: EnhancedStore = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor: Persistor = persistStore(store);

export default store;
