import { useState, useReducer } from 'react'
import './App.css'
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>{count}</h1>
      <div className='btn-group'>
        <button onClick={() => dispatch({ type: "INCREASE" })}>INCREASE</button>
        <button onClick={() => dispatch({ type: "DECREASE" })}>DECREASE</button>
        <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
      </div>
    </>
  )
}

export default App
