import * as actionTypes from '../actions/actionTypes';
import * as api from '../actions/api';
import axios from 'axios'

export  function getTarefas() {
  return dispatch => {
     axios.get('http://localhost:8080/api/tarefas/todas')
    .then(res => {
        dispatch({ type: actionTypes.FETCH_TAREFAS_SUCCESS, payload: res.data });
    })
    .catch(errors => {
      console.log(errors)
        dispatch({ type: actionTypes.FETCH_TAREFAS_FAILURE, payload: errors });
    });
  };
};

export const getUmaTarefa = id => {
  return dispatch => {
    api.getUmaTarefa(id).then(res => {
      if (res.status === 200) {
        dispatch({ type: actionTypes.FETCH_UMA_TAREFA_SUCCESS, payload: res.data });
      } else {
        dispatch({ type: actionTypes.FETCH_UMA_TAREFA_FAILURE });
      }
    });
  };
};

export const saveTarefa = tarefa => {
  api.salvarTarefa(tarefa).then(res => {
    if (res.status === 200) {
      console.log('Salvou!');
    }
  });
};
