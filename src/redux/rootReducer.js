import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer.js';
import icecreamReducer from './icecream/icecreamReducer.js';
import hotdogReducer from './hotdog/hotdogReducer.js';
import userReducer from './user/userReducer.js';

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  hotdog: hotdogReducer,
  user: userReducer
});

export default rootReducer;