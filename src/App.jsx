import { useState } from 'react'
import './App.css'
import '/node_modules/primeflex/primeflex.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className='hidden'>
       Athistakumar
      </div>
    </div>
  )
}

export default App
