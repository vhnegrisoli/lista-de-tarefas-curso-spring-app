import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
        minWidth: 700,
        maxWidth: 1200,
    },
  }));

const TarefaList = ({ isLoading, tarefas }) => (
    <div className={useStyles.root}>
      <Grid container spacing={3}>
      <Grid item xs={9}>
    <Paper className={useStyles.root}>
      <Table className={useStyles.table}>
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Tarefa</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Categoria</TableCell>
            <TableCell align="right">Usuario</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tarefas.map(tarefa => (
            <TableRow key={tarefa.id}>
              <TableCell align="right">{tarefa.id}</TableCell>
              <TableCell align="right">{tarefa.tarefa}</TableCell>
              <TableCell align="right">{tarefa.status}</TableCell>
              <TableCell align="right">{tarefa.categoria.descricao}</TableCell>
              <TableCell align="right">{tarefa.usuarios[0].nome}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </Grid>
    </Grid>
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
