import { useState } from 'react'
import Theme from './Theme/Theam'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Theme/>
    </>
  )
}

export default App
