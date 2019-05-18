import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import TarefaList from './tarefaList';
import { getTarefas } from '../../../actions/actions';

const formName = 'tarefasListForm'

export class tarefaListScreen extends React.Component {
    constructor(props) {
        super(props);
        this.initialize();
        this.props.getTarefas();
    }

    render() {
        return <TarefaList {...this.props} />;
    }
}

const mapStateToProps = (state, props) => {
    return {
        isLoading: state.tarefas.isLoading,
        tarefas: state.tarefas.tarefas,
    }
};
tarefaListScreen.propTypes = {
    getTarefas: PropTypes.func.isRequired,
}

const form = reduxForm({
    form: formName,
});
export default connect(
    mapStateToProps,
    { getTarefas },
)(form(tarefaListScreen));
