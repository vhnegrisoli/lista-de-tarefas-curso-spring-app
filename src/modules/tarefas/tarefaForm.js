import React from 'react';
import PropTypes from 'prop-types';

const tarefaForm = ({ isLoading, tarefa, categorias }) => (
  <div>
    <div clasName="container">
      <form>
        <div>
          <label>Digite a tarefa: </label>
          <input type="text" />
        </div>
        <div>
          <label>Situação: </label>
          <select>
            <option value="ABERTA">ABERTA</option>
            <option value="FAZENDO">FAZENDO</option>
            <option value="FINALIZADA">FINALIZADA</option>
          </select>
        </div>
        <label>Categoria: </label>
        <select>
          <option value="0">Selecione a categoria</option>
        </select>
      </form>
    </div>
  </div>
);

tarefaForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  tarefa: PropTypes.object.isRequired,
  categorias: PropTypes.array.isRequired,
};

export default tarefaForm;
