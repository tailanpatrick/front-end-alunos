// src/store/rootReducer.ts
import { combineReducers } from 'redux';
import {actionLoginRequest} from './loginRequest';

const rootReducer = combineReducers({
  actionLoginRequest, // Adicione o seu reducer de login aqui
  // outros reducers...
});

export default rootReducer;
