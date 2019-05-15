import { tarefaReducer } from '../reducers/tarefaReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  tarefaReducer: tarefaReducer,
});
