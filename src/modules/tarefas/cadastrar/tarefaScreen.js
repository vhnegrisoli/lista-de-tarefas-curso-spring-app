import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../../actions/actions';

import tarefaForm from './tarefaForm';
import tarefaForm from './tarefaForm';

export class tarefaScreen extends React.Component {
  constructor(props) {
    super(props);
    this.initialize();
  }

  save = values => {
    actions.saveTarefa(values);
  };

  initialize() { }

  render() {
    return <tarefaForm {...this.props} onSubmit={this.onSubmit.bind(this)} />;
  }
}

tarefaScreen.propTypes = {};

const mapStateToProps = (state, props) => {
  return {
  }
};

export default connect(
  mapStateToProps,
  { save },
)(form(tarefaForm));
