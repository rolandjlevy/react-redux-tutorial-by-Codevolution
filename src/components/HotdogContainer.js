import React from 'react';
import { buyHotdog } from '../redux';
import { connect } from 'react-redux';

function HotdogContainer({numOfHotdogs, buyHotdog}) {
  return (
    <div>
      <h2>Number of hotdogs: {numOfHotdogs}</h2>
      <button onClick={buyHotdog}>Buy hotdog</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfHotdogs: state.hotdog.numOfHotdogs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyHotdog: () => dispatch(buyHotdog())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(HotdogContainer);