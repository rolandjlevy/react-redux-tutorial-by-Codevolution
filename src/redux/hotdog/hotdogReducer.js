import { BUY_HOTDOG } from './hotdogTypes.js';

const initialState = {
  numOfHotdogs: 30
}

const hotdogReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_HOTDOG:
      return {
        ...state,
        numOfHotdogs: state.numOfHotdogs - 1
      }
    default: 
      return state;
  }
}

export default hotdogReducer;