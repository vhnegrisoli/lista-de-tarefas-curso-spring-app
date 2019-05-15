import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import tarefaForm from './modules/tarefas/tarefaForm';
import { bindActionCreators } from 'redux';

function App() {
  return (
    <div className="App">
      <tarefaForm />
    </div>
  );
}

export default App;
