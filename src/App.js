import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import tarefaListScreen from './modules/tarefas/listar/tarefaListScreen';
import { bindActionCreators } from 'redux';

function App() {
  return (
    <div className="App">
      <tarefaListScreen />
    </div>
  );
}

export default App;
