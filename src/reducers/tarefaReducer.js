import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLoading: true,
  tarefas: [],
  tarefa: null,
};

export const tarefaReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TAREFAS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tarefas: action.data,
      };
    case actionTypes.FETCH_UMA_TAREFA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tarefa: action.data,
      };
    case actionTypes.FETCH_UMA_TAREFA_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case actionTypes.FETCH_TAREFAS_FAILURE:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
