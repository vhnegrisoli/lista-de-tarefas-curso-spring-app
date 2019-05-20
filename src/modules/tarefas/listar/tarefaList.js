import React from 'react';
import PropTypes from 'prop-types';


const TarefaList = ({ isLoading, tarefas }) => (
    <div className="container">
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Listagem de Tarefas</h2>
                {tarefas && (
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>
                                    Código
                         </th>
                                <th>
                                    Tarefa
                         </th>
                                <th>
                                    Status
                         </th>
                                <th>
                                    Categoria
                         </th>
                                <th>
                                    Usuário Responsável
                         </th>
                            </tr>
                        </tbody>
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
    tarefas: PropTypes.array.isRequired,
};

TarefaList.defaultProps = {
    isLoading: true,
    tarefas: [],
};

export default TarefaList;
