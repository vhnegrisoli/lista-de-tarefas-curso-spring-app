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
        console.log(this)
    }

    render() {
        return <TarefaList {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.tarefas.isLoading,
        tarefas: state.tarefas.tarefas,
    }
};
TarefaListScreen.propTypes = {
    getTarefas: PropTypes.func.isRequired,
}

const form = reduxForm({
    form: formName,
});

export default connect(
    mapStateToProps,
    { getTarefas },
)(form(TarefaListScreen));
