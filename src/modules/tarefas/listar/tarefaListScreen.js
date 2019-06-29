import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import TarefaList from './tarefaList';
import { getTarefas } from '../../../actions/actions';

const formName = 'tarefasListForm'


export class TarefaListScreen extends React.Component {
    constructor(props) {
        super(props);
        this.initialize()
    }

    initialize() {
        this.props.getTarefas();
    }

    render() {
        return <TarefaList {...this.props}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.tarefas.isLoading,
        tarefas: state.tarefas.tarefas,
        errors: state.tarefas.errors,
    }
};
TarefaListScreen.propTypes = {
    getTarefas: PropTypes.func.isRequired,
    tarefas: PropTypes.array,
    errors: PropTypes.string,
}

const form = reduxForm({
    form: formName,
});

export default connect(
    mapStateToProps,
    { getTarefas },
)(form(TarefaListScreen));
