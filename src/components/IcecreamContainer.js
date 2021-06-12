import React from 'react';
import { buyIcecream } from '../redux';
import { connect } from 'react-redux';

function IcecreamContainer({numOfIcecreams, buyIcecream}) {
  return (
    <div>
      <h2>Number of icecreams: {numOfIcecreams}</h2>
      <button onClick={buyIcecream}>Buy icecream</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfIcecreams: state.icecream.numOfIcecreams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(IcecreamContainer);