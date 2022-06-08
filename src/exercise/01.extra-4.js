// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, newState) => {
  console.log(state, newState)
  const {type, step} = newState

  switch (type) {
    case 'INCREMENT':
      return {count: state.count + step}
    case 'DECREMENT':
      return {count: state.count - step}
    default:
      return state
  }
}

function Counter({initialCount = 0, step = 5}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
