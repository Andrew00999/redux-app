import React from 'react'
import { connect } from 'react-redux'

const Likes = (props) => {
  return (
    <div className='button-controls'>
      <button onClick={props.onIncrease}>❤️ {props.likes}</button>
      <button onClick={props.onDecrease}>Dislike</button>
    </div>
  )
}

function mapStateToProps(state) {
  console.log('mapStateToProps > ', state);
  const { likesReducer } = state
  return {
    likes: likesReducer.likes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrease: () => {
      console.log('increment')
      const action = { type: 'INCREMENT' }
      dispatch(action)
    },
    onDecrease: () => {
      console.log('decrement');
      const action = { type: 'DECREMENT' }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)