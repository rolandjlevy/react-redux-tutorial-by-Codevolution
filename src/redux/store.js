import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from 'redux-logger';
import rootReducer from './rootReducer.js';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(logger, thunk)
));

export default store;