import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Store } from './store/index';
import TarefaListScreen from './modules/tarefas/listar/tarefaListScreen'
function App() {

  return (
    <Provider store={Store}>
      <div className="App">
        <TarefaListScreen />
      </div>
    </Provider>
  );
}

export default App;
