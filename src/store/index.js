import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducer';
import imageMiddleware  from '../middlewares/';

// for use redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(imageMiddleware),
);

const store = createStore(
  reducer, enhancers);

export default store;