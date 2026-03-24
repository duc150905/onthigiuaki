import { useState } from 'react'
import './App.css'
import React from 'react';
const Child = React.memo(({ count }) => {
  console.log("child render");
  return <h2>count:{count}</h2>
});
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  // tránh re-render component con
  return (
    <>
      <Child count={count} />
      <div className='btn group'>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </>
  )
}

export default App
