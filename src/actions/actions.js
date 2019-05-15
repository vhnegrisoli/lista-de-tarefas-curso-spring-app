import * as actionTypes from '../actions/actionTypes';
import * as api from '../actions/api';
import { dispatch } from 'rxjs/internal/observable/range';

export const getTarefas = () => {
  return dispatch => {
    api.getTarefas().then(res => {
      if (res.status === 200) {
        dispatch({ type: actionTypes.FETCH_TAREFAS_SUCCESS, payload: res });
      } else {
        dispatch({ type: actionTypes.FETCH_TAREFAS_FAILURE });
      }
    });
  };
};

export const getUmaTarefa = id => {
  return dispatch => {
    api.getUmaTarefa(id).then(res => {
      if (res.status === 200) {
        dispatch({ type: actionTypes.FETCH_UMA_TAREFA_SUCCESS, payload: res });
      } else {
        dispatch({ type: actionTypes.FETCH_UMA_TAREFA_FAILURE });
      }
    });
  };
};
