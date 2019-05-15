import axios from 'axios';

const apiTarefas = 'http://localhost:8080/api/tarefas/todas';
const apiUmaTarefa = 'http://localhost:8080/api/tarefas/buscar/';
const apiSalvarTarefa = 'http://localhost:8080/api/tarefas/salvar';

export const getTarefas = () => {
  axios.get(apiTarefas);
};

export const getUmaTarefa = id => {
  axios.get(apiUmaTarefa + id);
};

export const salvarTarefa = tarefa => {
  axios.post(apiSalvarTarefa, {
    tarefa,
  });
};
