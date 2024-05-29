import { useState } from 'react'
import './App.css'
import CounterWithReducer from '../Pages/CounterWithReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterWithReducer/>
    </>
  )
}

export default App
