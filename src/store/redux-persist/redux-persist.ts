import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import buttonRequest from '../reducers/buttonRequest';
import buttonSuccess from '../reducers/buttonSuccess';
import buttonFailure from '../reducers/buttonFailure';

const persistConfig = {
  key: 'front-end-alunos',
  storage,
  whitelist: ['buttonRequest', 'buttonSuccess', 'buttonFailure'],

};

const rootReducer = combineReducers({
  buttonRequest,
  buttonSuccess,
  buttonFailure,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
