import { createStore } from 'redux'


const initialState = {
  likes: 0
}

const reducer = (state = initialState, action) => { }

const store = createStore(reducer)

export default store

