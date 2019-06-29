import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLoading: true,
  tarefas: [],
  tarefa: null,
  errors: ''
};

export default function tarefaReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_TAREFAS_SUCCESS:
      console.log(action)
      return {
        ...state,
        isLoading: false,
        tarefas: action.payload,
      };
    case actionTypes.FETCH_UMA_TAREFA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tarefa: action.payload,
      };
    case actionTypes.FETCH_UMA_TAREFA_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload
      };
    case actionTypes.FETCH_TAREFAS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload.message
      };
    default:
      return state;
  }
};
