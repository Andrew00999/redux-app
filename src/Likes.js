import React from 'react'
import { connect } from 'react-redux'
import { INCREMENT, DECREMENT } from './redux/types.js'



function Likes(props) {
  return (
    <div className='button-controls'>
      <button onClick={props.onIncrease}>❤️ {props.likes}</button>
      <button onClick={props.onDecrease}>💔 Dislike</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    likes: state.likes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrease: () => {
      const action = { type: INCREMENT }
      dispatch(action)
    },
    onDecrease: () => {
      const action = { type: DECREMENT }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)