import { createStore, applyMiddleware } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';
import { Reducers } from '../reducers/index';

const configureStore = () => {
  return createStore(
    Reducers,
    applyMiddleware(axiosMiddleware(axios))
  );
}

const store = configureStore();