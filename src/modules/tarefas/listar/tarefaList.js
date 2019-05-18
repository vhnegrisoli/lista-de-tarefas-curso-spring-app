import React from 'react';
import PropTypes from 'prop-types';


const TarefaList = ({ isLoading, tarefas }) => (
    <div className="container">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Listagem de Tarefas</h5>
                {tarefas && (
                    <table className="table">
                        <tr>
                            <th>
                                Col 1
                         </th>
                            <th>
                                Col 2
                         </th>
                            <th>
                                Col 3
                         </th>
                        </tr>
                        {tarefas.map(
                            tarefa => (
                                <tr>
                                    <td>{tarefa.id}</td>
                                    <td>{tarefa.tarefa}</td>
                                    <td>{tarefa.status}</td>
                                    <td>{tarefa.categoria.descricao}</td>
                                    <td>{tarefa.usuarios.nome}</td>
                                </tr>
                            )
                        )}
                    </table>
                )}
            </div>
        </div>
    </div>
);

TarefaList.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    tarefas: PropTypes.object.isRequired,
};

export default TarefaList;
