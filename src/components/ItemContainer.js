import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIcecream } from '../redux';

function ItemContainer(props) {
  return (
    <div>
      <h2>Number of items: {props.item}</h2>
      <button onClick={props.buyItem}>Buy item</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake 
  ? ownProps.cake.numOfCakes 
  : ownProps.icecream.numOfIcecreams;
  return {
    item: itemState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake 
  ?  () => dispatch(buyCake())
  :  () => dispatch(buyIcecream())
  return {
    buyItem: dispatchFunction
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemContainer);