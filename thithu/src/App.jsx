import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);
  return (
    <>
      <h1>{count}</h1>
      <div className='btn-group'>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
      </div>

    </>
  )
}

export default App
