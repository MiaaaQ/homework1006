import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Hello kilin</h1>
      <h2>you clicked {count} times!!!</h2>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
