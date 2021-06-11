import { createStore } from 'redux';
import { cakeReducer } from './cake/cakeReducer.js';

export default const store = createStore(cakeReducer);