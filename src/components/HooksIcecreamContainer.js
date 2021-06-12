import React from 'react';
import { buyIcecream } from '../redux';
import { useSelector, useDispatch } from 'react-redux';
// useSelector is the Hooks equivalant to mapStateToProps

function HooksIcecreamContainer() {
  const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of icecreams (hooks): {numOfIcecreams}</h2>
      <button onClick={() => dispatch(buyIcecream())}>Buy icecream</button>
    </div>
  )
}

export default HooksIcecreamContainer;