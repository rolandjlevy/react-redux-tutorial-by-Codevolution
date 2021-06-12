import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer.js';
import icecreamReducer from './icecream/icecreamReducer.js';
import hotdogReducer from './hotdog/hotdogReducer.js';

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  hotdog: hotdogReducer
});

export default rootReducer;